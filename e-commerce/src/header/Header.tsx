import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <div style={styles.banner}><p style={styles.text}>Sign up and get 20% off to your first order. <a href="#" style={styles.link}>Sign Up Now</a></p></div>
            <header style={styles.header}>
                <nav><h1>SHOP.CO</h1>

                </nav>
            </header>
        </>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: '1rem 2rem',
        // backgroundColor: '#333',
        color: '#fff',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    banner: {
        backgroundColor: '#000000',
        height: '34px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
    },
    link: {
        color: '#fff',

    },
};

export default Header;