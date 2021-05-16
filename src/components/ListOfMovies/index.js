import React from 'react';
import MovieItem from 'components/MovieItem';
import {Row, Col, Space} from 'antd';

import './styles.css';

export default function ListOfMovies({ movies, title }){
    return (
        <div className="ListOfMovies">
            <Row>
                <Col span={12} offset={6}>
                    <h1 className="title">{ title }</h1>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm:16, md: 24, lg: 32}}>
                {
                    movies.length > 0
                    ?
                    movies.map(movie => (
                            <Col className="gutter-row margin-botton" xs={20} sm={16} md={12} lg={8} xl={4} offset={1} key={movie.id}>
                                <MovieItem
                                    id={movie.id}
                                    name={movie.title}
                                    date={movie.release_date}
                                    vote={movie.vote_average}
                                    image={movie.poster_path}
                                    rating={movie.rating}
                                    />
                            </Col>
                    ))
                    :
                    null
                }
            </Row>
        </div >
    )
}