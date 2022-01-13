/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import Numbers from './Number';
// import Contact from './Contact';
import { largeBorders, mainBackground, purpleMonkey } from '../common/styles/colors';
import '../App.css';

const styles = {
    container: css`
    border: 8px solid ${largeBorders};
    margin: 10px;
    padding: 12px;
    background-color: ${mainBackground};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 550px;
    text-align: center;
    `,
    itemsContainer: css`
    border: 8px solid ${purpleMonkey};
    border-radius: 8px;
    padding: 12px;
    `,
    listMain: css`

    `,

};



function PhoneNumberList() {
    const [phonenumbers, setNumbers] = useState([]);
    // const [contact, setContact] = useState([]);

    const addNumber = thenumber => {
        if (!thenumber.text || /^\s*$/.test(thenumber.text)) {
            return;
        }

        const newNumber = [thenumber, ...phonenumbers];

        setNumbers(newNumber);
    };

    // const addContact = thecontact => {
    //     if (!thecontact.text || /^\s*$/.test(thecontact.text)) {
    //         return;
    //     }

    //     const newContact = [thecontact, ...contact];

    //     setContact(newContact);
    // };

    const updateNumber = (numberId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setNumbers(prev => prev.map(item => (item.id === numberId ? newValue : item)))
    };


    const removeContact = id => {
        const removeArr = [...phonenumbers].filter(thenumber => thenumber.id !== id)

        setNumbers(removeArr);
    };


    return (
        <div
            className='number-list-main'
            css={styles.container}
        >
            <h2>List of Numbers</h2>
            <div
                className='number-list'
                css={styles.itemsContainer}
            >
                <PhoneBookForm
                    css={styles.formMain}
                    onSubmit={addNumber}
                />
                <Numbers
                    css={styles.listMain}
                    phonenumbers={phonenumbers}
                    removeContact={removeContact}
                    updateNumber={updateNumber}
                />
                {/* <Contact
                    css={styles.listMain}
                    contact={contact}
                    removeContact={removeContact}
                    updateNumber={updateNumber}
                /> */}
            </div>
        </div>
    )
}

export default PhoneNumberList;
