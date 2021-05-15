import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import './styles.css';

export default function MovieItem({ name, date, vote, image, id}) {
    return (
        <>
            <Link to={`/movie/${id}`}>
                <Card className="Movie" bodyStyle={{ padding: 0 }}>
                        <img loading="lazy" alt={name} src={`https://image.tmdb.org/t/p/w500${image}`} />
                    <div className='custom-card'>
                        <h3>{name}</h3>
                        <p>{`Date: ${date} || Votes: ${vote}`}</p>
                    </div>
                </Card>
            </Link>
        </>
    )
}