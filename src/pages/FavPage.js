import React from 'react';
import {Helmet} from 'react-helmet';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import { useSelector } from 'react-redux';

export default function Home() {
    const favs = useSelector(state => state.movies)

    return (
        <>
            <Helmet>
                <title>Favourites movies</title>
            </Helmet>
            <Layout>
                <ListOfMovies movies={favs} title="Favourites movies" />
            </Layout>
        </>
    )
}