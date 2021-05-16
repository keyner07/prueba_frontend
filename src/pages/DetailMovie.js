import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Detail from 'components/DetailMovie';

import getMovieById from 'services/getMovieById';
import getSimilarMovies from 'services/getMoviesSimilar';

export default function DetailMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [moviesSimilar, setMoviesSimilar] = useState([]);

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

        getSimilarMovies({ id })
            .then(movies => {
                setMoviesSimilar(movies);
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
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.date}
                    vote_average={movie.vote/2}
                    poster_path={movie.url}
                    description={movie.description}
                    genres={movie.genres}
                    movies={moviesSimilar}
                />
            </Layout>
        </>
    )
}