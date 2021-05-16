import React from 'react';
import { Row, Col, Rate, Tag } from 'antd'
import './styles.css';

import randomColor from 'utils/randomColors';
import RateMovie from 'components/RateMovie';
import MoviesSimilar from 'components/MoviesSimilar';

export default function DetailMovie({ title, release_date, vote_average, poster_path, description, genres=[], id, actors=[]}) {
    

    return (
        <div className="detail-movie">
            <Row>
                <Col span={8} offset={1}>
                    <img alt={title} width='85%' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                </Col>
                <Col span={12} offset={1}>
                    <h1>{title}</h1>
                    <h3>{release_date}</h3>
                    <hr />
                    <strong> Description: </strong>
                    <p>{description}</p>
                    <hr />
                    <div className='genres'>
                        <span className='genreTitle'>
                        <strong>Genres: </strong>
                        </span>
                        {genres.map(genre => <Tag color={randomColor()} key={genre.id}>{genre.name}</Tag>)}
                    </div>
                    <Rate className='rate' disabled defaultValue={vote_average} />
                    <hr />
                    <div className='genres'>
                        <span className='genreTitle'>
                        <strong>Cast: </strong>
                        </span>
                        {actors.map(actor => <Tag color={randomColor()} key={actor.id}>{actor.name} as {actor.character}</Tag>)}
                    </div>
                    <hr />
                    <RateMovie id={id} />
                    <hr />
                </Col>
                <Col>
                    <MoviesSimilar id={id} />
                </Col>
            </Row> 
        </div>
    )
}