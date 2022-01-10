/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import PhoneBookForm from './PhoneBookForm';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { largeBorders } from '../common/styles/colors';

const styles = {
    container: css`
    // border: 8px solid ${largeBorders};
    border: 3px solid pink;
    border-radius: 8px;
    margin: 8px;
    padding: 12px;
    display: flex;
    justify-content: center;
    width: 50%;
    `,
    form: css`
    border: 3px solid yellow;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    `,
    number: css`
    border: 3px solid white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
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
                <div className="icons">
                    <BsFillTelephoneFill
                        onClick={() => removeNumber(thenumber.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: thenumber.id, value: thenumber.text })}
                        className='edit-icon'
                    />
                </div>
            </div>
        </div>
    ))
}

export default Numbers
