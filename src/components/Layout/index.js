import React from 'react';

import HeaderComponent from 'components/Header';
import FooterComponent from 'components/Footer';

import './styles.css';

export default function LayoutComponent({ children }) {
    return (
        <>
            <HeaderComponent />
                <div style={{ margin: "auto", minHeight: "100vh"}}>  
                    {children}
                </div>
            <FooterComponent />
        </>
    )
}