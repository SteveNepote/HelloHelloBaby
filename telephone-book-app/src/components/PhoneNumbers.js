import React, { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';

function PhoneNumbers({ phonenumbers, completeNumber, removeNumber }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    return phonenumbers.map((thenumber, index) => (
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
    ))
}

export default PhoneNumbers
