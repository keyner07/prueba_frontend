import React, { useState} from 'react';
import { Rate, Button } from 'antd';

import rateMovie from 'services/rateMovie';
import useUser from 'hooks/useUser';

export default function RateMovie({ id}) {
    const {sessionId} = useUser();
    const [stars, setStars] = useState(null)
    const [disableButton, setDisabledButton] = useState(false);
    
    const handleVoteChange = value => {
        setStars(value)
    }

    const onSubmit = ({ id }) => {
        setDisabledButton(true)
        rateMovie({ id, sessionId, value: stars })
            .then(() => {
                setDisabledButton(false)
                setStars(null)
            });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(stars>0){
            onSubmit({ id })
        }
      }

    return (
        <div>
            <span className='genreTitle'>
                <strong>Votacion</strong>
            </span>
            <Rate allowHalf defaultValue={stars} onChange={handleVoteChange} />
            <Button type="primary" disabled={disableButton} onClick={handleSubmit}>Enviar</Button>
        </div>
    )
}