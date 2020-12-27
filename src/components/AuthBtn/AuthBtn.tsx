import styles from './Auth.module.scss';
import { AuthBtnProp } from '../../interfaces/AuthBtn';

export default function AuthBtn({ btn }: AuthBtnProp) {
    return (
        <button
            type="submit"
            className={styles.authbtn}>
            {btn}
        </button>
    )
}