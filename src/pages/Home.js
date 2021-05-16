import React, { useEffect, useState} from 'react';
import { Spin } from 'antd';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getTopRatedMovies from 'services/getTopMovies';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [moviesNow, setMoviesNow] = useState([]);

    useEffect(() => {
        setLoading(true);

        getTopRatedMovies()
            .then(movies => {
                setMoviesNow(movies);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [])

    return (
        <>
            <Layout>
            {
                    loading
                    ?
                    <div className="container">
                        <Spin size="large" />
                    </div>
                    :
                    <ListOfMovies movies={moviesNow} title="Top Rated" />
            }
            </Layout>
        </>
    )
}