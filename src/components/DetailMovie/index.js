import React from 'react';
import { Row, Col, Rate, Tag } from 'antd'
import './styles.css';

import randomColor from 'utils/randomColors';
import RateMovie from 'components/RateMovie';
import MoviesSimilar from 'components/MoviesSimilar';

export default function DetailMovie({ name, date, vote, image, description, genres=[], id, actors=[], language}) {
    

    return (
        <div className="detail-movie" data-testid="div-detail-movie">
            <Row>
                <Col span={8} offset={1}>
                    <img alt={name} width='85%' src={`https://image.tmdb.org/t/p/w500${image}`} />
                </Col>
                <Col span={12} offset={1}>
                    <h1>{name}</h1>
                    <h3>{date}</h3>
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
                    <Rate className='rate' disabled defaultValue={vote} />
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