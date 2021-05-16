import React from 'react';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import useUser from "hooks/useUser";

export default function Home() {
    const { favs } = useUser();

    return (
        <>
            <Layout>
                <div style={{ margin: "auto", minHeight: "100vh"}}>
                    <ListOfMovies movies={favs} title="Favourites movies" />
                </div>
            </Layout>
        </>
    )
}