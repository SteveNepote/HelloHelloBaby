/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';


const styles = {
    main: css`
    `,
};

function PhoneBookForm(props) {
    const [input, setList] = useState('');

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
        <div>
            <form className='number-form' onSubmit={handleSubmit}>
                <input
                    type="test"
                    placeholder='Add a Number'
                    value={input}
                    name="test"
                    className='number-input'
                    onChange={handleChange}
                />
                <button className='add-button'>Add Number</button>
            </form>
        </div>
    )
}

export default PhoneBookForm;
