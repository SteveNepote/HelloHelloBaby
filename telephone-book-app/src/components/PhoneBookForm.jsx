/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { largeBorders } from '../common/styles/colors';

const styles = {
    main: css`
    border: 8px solid ${largeBorders};
    border-radius: 8px;
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    `,
    input: css`
    text-align: center;
    `,
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
                            type="text"
                            placeholder='Edit this Number'
                            value={input}
                            name="text"
                            className='number-input edit'
                            onChange={handleChange}
                            ref={entryFocus}
                            css={styles.input}
                        />
                        <button className='add-button edit'>Edit this Number</button>
                    </>
                )
                    :
                    (
                        <>
                            <input
                                type="text"
                                placeholder='Add a Number'
                                value={input}
                                name="text"
                                className='number-input'
                                onChange={handleChange}
                                ref={entryFocus}
                                css={styles.input}
                            />
                            <button className='add-button'>Add Number</button>
                        </>
                    )}

            </form>
        </div>
    )
}

export default PhoneBookForm;
