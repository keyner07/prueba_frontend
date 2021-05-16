import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import {Helmet} from 'react-helmet';


import Layout from 'components/Layout';
import Detail from 'components/DetailMovie';

import getMovieById from 'services/getMovieById';
import getActors from 'services/getActorsById';

export default function DetailMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [actors, setActors] = useState([]);

    const title = `${movie.title} || MoviesApp`

    useEffect(() => {
        setLoading(true);

        getMovieById({ id})
            .then(movie => {
                setMovie(movie);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [id])

    useEffect(() => {
        setLoading(true);

        getActors({ id})
            .then(actors => {
                setActors(actors)
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [id])

    return (
        <>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={movie.title} />
            </Helmet>
            <Layout>
            {
                    loading
                    ?
                    <div className="container">
                        <Spin size="large" />
                    </div>
                    :
                    <Detail
                        id={movie.id}
                        title={movie.title}
                        release_date={movie.date}
                        vote_average={movie.vote/2}
                        poster_path={movie.url}
                        description={movie.description}
                        genres={movie.genres}
                        actors={actors}
                    />
            }
            </Layout>
        </>
    )
}