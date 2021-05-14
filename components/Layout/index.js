import Head from 'next/head';

import styles from './Layout.module.css';

const Layout = ({ children, title = "Home", pageTitle = "Welcome" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.container}>
            <header className={styles.header}>
                <h1>
                    <span className={styles['header-title']}>{pageTitle}</span>
                </h1>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>Copyright @ 2021</footer>
            </div>
        </>
    );
};

export default Layout;