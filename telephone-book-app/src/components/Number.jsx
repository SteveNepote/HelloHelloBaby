/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import PhoneBookForm from './PhoneBookForm';

import { BsFillTelephoneXFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { innerBorders, listItems, blackGraded, purpleMonkey } from '../common/styles/colors';

const styles = {
    container: css`
    // border: 8px solid ${innerBorders};
    border-radius: 8px;
    margin: 12px;
    padding: 20px;
    display: flex;
    justify-content: center;
    width: 80%;
    background-color: ${blackGraded};
    color: ${listItems};
    `,
    form: css`
    width: 90%;
    border: 1px dotted yellow;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    `,
    number: css`
    border: 1px solid ${innerBorders};
    background-color: ${blackGraded};
    font-size: 35px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    `,
    icons: css`
    margin: 10px;
    border-radius: 8px;
    border: 1px solid ${innerBorders};
    background-color: ${purpleMonkey};
    `,
    removeIcon: css`
    font-size: 35px;
    margin: 12px 30px;
    `,
    editIcon: css`
    font-size: 35px;
    margin: 12px 30px;
    `,
};

function Numbers({ phonenumbers, completeNumber, removeNumber, updateNumber }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateNumber(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <PhoneBookForm
            edit={edit}
            onSubmit={submitUpdate}
            css={styles.container}
        />
    };

    return phonenumbers.map((thenumber, index) => (
        <div
            css={styles.container}
        >
            <div
                className={thenumber.isComplete ? 'number-row complete' : 'number-row'}
                key={index}
                css={styles.form}
            >
                <div key={thenumber.id} onClick={() => completeNumber(thenumber.id)}
                    css={styles.number}>
                    {thenumber.text}
                </div>
                <div
                    className="icons"
                    css={styles.icons}
                >
                    <TiEdit
                        css={styles.editIcon}
                        onClick={() => setEdit({ id: thenumber.id, value: thenumber.text })}
                        className='edit-icon'
                    />

                    <BsFillTelephoneXFill
                        tooltip="Remove"
                        css={styles.removeIcon}
                        onClick={() => removeNumber(thenumber.id)}
                        className='delete-icon'
                    />

                </div>
            </div>
        </div>
    ))
}

export default Numbers
