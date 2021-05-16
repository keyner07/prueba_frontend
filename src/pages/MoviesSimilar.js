import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getSimilarMovies from 'services/getMoviesSimilar';

export default function Home() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [moviesSimilar, setMoviesSimilar] = useState([]);

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
                <div style={{ margin: "auto"}}>
                    <ListOfMovies movies={moviesSimilar} title={`Movies similar`} />
                </div>
            </Layout>
        </>
    )
}