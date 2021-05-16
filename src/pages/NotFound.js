import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';

export default function Home() {

    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <h2>Not found!!!</h2>
                </div>
            </Layout>
        </>
    )
}