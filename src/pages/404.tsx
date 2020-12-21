import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';

const Custom404: React.FC = () => {
    return (
        <div className={styles.container}>

            <p className={styles.error}>404</p>
            <h1 className={styles.text}>Page not found</h1>

            <Link href={'/'}><a>Go back to Home page</a></Link>
        </div>

    )
}

export default Custom404