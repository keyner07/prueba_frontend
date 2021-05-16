import React from 'react';
import {Helmet} from 'react-helmet';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import useUser from "hooks/useUser";

export default function Home() {
    const { favs } = useUser();

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