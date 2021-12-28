import React, { useState } from 'react'
import PhoneBookForm from './PhoneBookForm';
import PhoneNumbers from './PhoneNumbers';

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
        <div>
            <h1>List of Numbers</h1>
            <PhoneBookForm
                onSubmit={addNumber}
            />
            <PhoneNumbers
                phonenumbers={phonenumbers}
                completeNumber={completeNumber}
                removeNumber={removeNumber}
                updateNumber={updateNumber}
            />

        </div>
    )
}

export default PhoneNumberList;
