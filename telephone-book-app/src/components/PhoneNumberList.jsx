/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import Numbers from './Number';
import { largeBorders } from '../common/styles/colors';

const styles = {
    container: css`
    border: 8px solid ${largeBorders};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    `,
    main: css`
    border: 8px solid ${largeBorders};
    border-radius: 8px;
    display: flex;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 50%;
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
            css={styles.container}
        >
            <h1>List of Numbers</h1>
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
    )
}

export default PhoneNumberList;
