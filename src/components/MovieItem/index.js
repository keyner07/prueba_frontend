import React from 'react';
import { Card } from 'antd';

import './styles.css';

export default function MovieItem({ name, date, vote, image}) {
    return (
        <div>
            <Card className="Movie" bodyStyle={{ padding: 0 }}>
                <div className='custom-image'>
                    <img loading="lazy" alt={name} src={image} />
                </div>
                <div className='custom-card'>
                    <h3>{name}</h3>
                    <p>{`Date: ${date} || Votes: ${vote}`}</p>
                </div>
            </Card>
        </div>
    )
}