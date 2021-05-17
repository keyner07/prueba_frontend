import React from 'react';
import MovieItem from 'components/MovieItem';
import {Row, Col} from 'antd';

import './styles.css';

export default function ListOfMovies({ movies, title, button }){
    return (
        <div className="ListOfMovies">
            {
                title
                ?
                <>
                    <Row>
                        <Col span={12} offset={6}>
                            <h1 className="title">{ title }</h1>
                        </Col>
                    </Row>
                </>
                :
                null
            }
            <Row gutter={{ xs: 8, sm:16, md: 24, lg: 32}} >
                {
                    movies.length > 0
                    ?
                    movies.map(movie => (
                            <Col className="gutter-row margin-botton" xs={20} sm={16} md={12} lg={8} xl={4} offset={1} key={movie.id}>
                                <MovieItem
                                    id={movie.id}
                                    name={movie.name}
                                    date={movie.date}
                                    vote={movie.vote}
                                    image={movie.image}
                                    rating={movie.rating}
                                    />
                            </Col>
                    ))
                    :
                    null
                }
            </Row>
            {
                    button && movies.length >0
                    ?
                    <Row>
                        <Col offset={12}>
                            {button}
                        </Col>
                    </Row>
                    :
                    null
                }
        </div >
    )
}