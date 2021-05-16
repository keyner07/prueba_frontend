import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Rate, Tag, Button } from 'antd'
import './styles.css';

import randomColor from 'utils/randomColors';
import RateMovie from 'components/RateMovie';

export default function DetailMovie({ title, release_date, vote_average, poster_path, description, genres=[], id}) {
    const history = useHistory();

    const moviesSimilar = () => {
        history.push(`/movies/${id}/similar`)
    }
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
                    <RateMovie id={id} />
                    <hr />
                    <div className="container-btn-similar">
                        <Button onClick={moviesSimilar}>Buscar peliculas similares</Button>
                    </div>

                </Col>
            </Row> 
        </div>
    )
}