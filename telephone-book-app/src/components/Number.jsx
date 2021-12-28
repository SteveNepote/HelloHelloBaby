/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
// import PhoneBookForm from './PhoneBookForm';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { largeBorders } from '../common/styles/colors';

const styles = {
    container: css`
    border: 8px solid ${largeBorders};
    border-radius: 8px;
    margin: 8px;
    padding: 12px;
    `,
};

function Numbers({ phonenumbers, completeNumber, removeNumber }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    return phonenumbers.map((thenumber, index) => (
        <div
            css={styles.container}
        >
            <div className={thenumber.isComplete ? 'number-row complete' : 'number-row'}
                key={index}
            >
                <div key={thenumber.id} onClick={() => completeNumber(thenumber.id)}>
                    {thenumber.text}
                </div>
                <div className="icons">
                    <BsFillTelephoneFill
                        onClick={() => removeNumber(thenumber.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: thenumber.id, value: thenumber.text })}
                        className='eit-icon'
                    />
                </div>
            </div>
        </div>
    ))
}

export default Numbers
