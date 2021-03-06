import React from 'react';
import styles from './Loading.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
    return (
        <div className={styles.loadpage}>
            <CircularProgress />
        </div>
    )
}

export default Loading;