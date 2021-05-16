import React, { useEffect, useState} from 'react';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getTopRatedMovies from 'services/getRatedMovies';
import useUser from "hooks/useUser";

export default function Home() {
    const { sessionId } = useUser();
    const [loading, setLoading] = useState(false);
    const [moviesRated, setMoviesRated] = useState([]);

    useEffect(() => {
        setLoading(true);

        getTopRatedMovies({ sessionId })
            .then(movies => {
                setMoviesRated(movies);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [sessionId])

    return (
        <>
            <Helmet>
                <title>Rated movies || MoviesApp</title>
            </Helmet>
            <Layout>
                {
                    loading
                    ?
                    <div className="container">
                        <Spin size="large" />
                    </div>
                    :
                    <div style={{ margin: "auto"}}>
                        <ListOfMovies movies={moviesRated} title="Peliculas votadas por mi" />
                    </div>
                }
            </Layout>
        </>
    )
}