import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import Fav from 'components/Fav';

import './styles.css';

export default function MovieItem({ name, date, vote, image, id}) {
    return (
        <>
            <Card className="Movie" bodyStyle={{ padding: 0 }}>
                <div className="Movie-buttons">
                    <Fav
                        id={id}
                        name={name}
                        date={date}
                        vote={vote}
                        image={image}
                    ></Fav>
                </div>
                <Link to={`/movies/${id}`}>
                    <img loading="lazy" alt={name} src={`https://image.tmdb.org/t/p/w500${image}`} />
                    <div className='custom-card'>
                        <h3>{name}</h3>
                        <p>{`Date: ${date} || Votes: ${vote}`}</p>
                    </div>
                </Link>
            </Card>
        </>
    )
}