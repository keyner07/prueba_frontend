import React from 'react';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import useUser from "hooks/useUser";

export default function Home() {
    const { favs } = useUser();
    console.log(favs);
    return (
        <>
            <Layout>
                <div style={{ margin: "auto"}}>
                    <ListOfMovies movies={favs} title="Favourites movies" />
                </div>
            </Layout>
        </>
    )
}