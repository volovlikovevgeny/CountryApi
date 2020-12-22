import styles from './Auth.module.css';

export default function AuthBtn({ btn }) {
    return (
        <button
            type="submit"
            className={styles.authbtn}>
            {btn}
        </button>
    )
}