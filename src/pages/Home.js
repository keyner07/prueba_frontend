import React from 'react';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import { data } from 'data/data';

export default function Home() {
    return (
        <>
            <Layout>
                <div style={{ margin: "auto"}}>
                    <ListOfMovies movies={data} title="Top Rated" />
                </div>
            </Layout>
        </>
    )
}