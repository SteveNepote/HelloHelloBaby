/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import Numbers from './Number';
import { largeBorders, mainBackground } from '../common/styles/colors';
import '../App.css';

const styles = {
    container: css`
    border: 8px solid ${largeBorders};
    background-image: url("./common/styles/img/large_cord_png.png");
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
    border: 3px solid purple;
    padding: 12px;
    `,
    main: css`
    // none of these do shit
    // border: 8px solid ${largeBorders};
    border: 3px solid red;
    border-radius: 8px;

    justify-content: center !important;
    padding: 12px;
    `,

};

function PhoneNumberList() {
    const [phonenumbers, setNumbers] = useState([]);

    const addNumber = thenumber => {
        if (!thenumber.text || /^\s*$/.test(thenumber.text)) {
            return;
        }

        const newNumber = [thenumber, ...phonenumbers];

        setNumbers(newNumber);
    };


    const updateNumber = (numberId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setNumbers(prev => prev.map(item => (item.id === numberId ? newValue : item)))
    };


    const removeNumber = id => {
        const removeArr = [...phonenumbers].filter(thenumber => thenumber.id !== id)

        setNumbers(removeArr);
    };


    const completeNumber = id => {
        let updatedNumbers = phonenumbers.map(thenumber => {
            if (thenumber.id === id) {
                thenumber.isComplete = !thenumber.isComplete
            }
            return thenumber
        });
        setNumbers(updatedNumbers);
    };

    return (
        <div
            className='number-list'
            css={styles.container}
        >
            <h2>List of Numbers</h2>
            <div
                className='number-list'
                css={styles.itemsContainer}
            >
                <PhoneBookForm
                    css={styles.main}
                    onSubmit={addNumber}
                />
                <Numbers
                    css={styles.main}
                    phonenumbers={phonenumbers}
                    completeNumber={completeNumber}
                    removeNumber={removeNumber}
                    updateNumber={updateNumber}
                />
            </div>
        </div>
    )
}

export default PhoneNumberList;
