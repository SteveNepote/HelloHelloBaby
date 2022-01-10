/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { largeBorders, blackOut, pinkShadow } from '../common/styles/colors';

const styles = {
    main: css`
    border: 8px solid ${largeBorders};
    background-color: ${blackOut};
    // border: 3px solid blue;
    border-radius: 8px;
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    `,
    input: css`
    border: 3px solid gold;
    text-align: center;
    width: 300px;
    height: 50px;
    border-radius: 8px;
    font-size: 30px;
    margin: 12px;
    `,
    addButton: css`
    border: 1px solid ${largeBorders};
    color: ${largeBorders};
    text-shadow: 2px 2px ${pinkShadow};
    `,
};

function formatPhoneNumber(value) {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6, 9)}`;

};

function phoneNumberFormat() {

    const inputField = document.getElementById("phone-number")
    const formattedInputValue = formatPhoneNumber(inputField.value);

    inputField.value = formattedInputValue;
};


function PhoneBookForm(props) {
    const [input, setList] = useState(props.edit ? props.edit.value : '');

    const entryFocus = useRef(null);

    useEffect(() => {
        entryFocus.current.focus()
    });

    const handleChange = e => {
        setList(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setList('');
    };

    return (
        <div
            css={styles.main}
        >
            <form className='number-form' onSubmit={handleSubmit}>

                {props.edit ? (
                    <>
                        <input
                            onkeydown={phoneNumberFormat}
                            id="phone-number"
                            type="text"
                            placeholder='Edit this Number'
                            value={input}
                            name="text"
                            className='number-input edit'
                            onChange={handleChange}
                            ref={entryFocus}
                            css={styles.input}
                        />
                        <button className='add-button-edit'>Edit</button>
                    </>
                )
                    :
                    (
                        <>
                            <input
                                onkeydown={phoneNumberFormat}
                                id="phone-number"
                                type="text"
                                placeholder='Enter Number'
                                value={input}
                                name="text"
                                className='number-input'
                                onChange={handleChange}
                                ref={entryFocus}
                                css={styles.input}
                            />

                            <button css={styles.addButton} className='add-button'>Add Number</button>
                        </>
                    )}

            </form>
        </div>
    )
}

export default PhoneBookForm;
