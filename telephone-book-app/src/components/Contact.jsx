/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import PhoneBookForm from './PhoneBookForm';

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

function Contact({ contact, updateContact }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateContact(edit.id, value)
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

    return contact.map((thecontact, index) => (
        <div
            css={styles.container}
        >
            <div
                key={index}
                css={styles.form}
            >
                <div key={thecontact.id}
                    css={styles.number}>
                    {thecontact.text}
                </div>
            </div>
        </div>
    ))
}

export default Contact;