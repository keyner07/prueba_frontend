import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Detail from 'components/DetailMovie';

import getMovieById from 'services/getMovieById';

export default function DetailMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        setLoading(true);

        getMovieById({ id})
            .then(movie => {
                setMovie(movie);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [id])

    if(loading) {
        return (
            <h1>Cargando...</h1>
        )
    }
    return (
        <>
            <Layout>
                <Detail
                    title={movie.title}
                    release_date={movie.date}
                    vote_average={movie.vote/2}
                    poster_path={movie.url}
                    description={movie.description}
                    genres={movie.genres}
                />
            </Layout>
        </>
    )
}