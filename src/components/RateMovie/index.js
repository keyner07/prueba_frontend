import React, { useState} from 'react';
import { Rate, Button, Space } from 'antd';

import rateMovie from 'services/rateMovie';
import { useSelector } from 'react-redux';

export default function RateMovie({ id}) {
    const sessionId = useSelector(state => state.user)
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
                setStars(0)
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
            <span className='rateMovie'>
                <strong>Votacion</strong>
            </span>
            <Space>
                <Rate allowHalf value={stars} onChange={handleVoteChange} />
                <Button type="primary" disabled={disableButton} onClick={handleSubmit}>Enviar</Button>
            </Space>
        </div>
    )
}