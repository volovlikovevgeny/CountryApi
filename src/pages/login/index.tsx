import styles from './login.module.css'
import Layout from '../../components/Layout/Layout';
import classes from './login.module.css';

export default function Login() {
    return (
        <Layout>
            <form>
                <div className={styles.form_container}>
                    <label ><b>Email</b></label>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        id="email"
                        required />

                    <label><b>Password</b></label>
                    <input
                        className={classes.input}
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        id="psw"
                        required />

                    <button
                        type="submit"
                        className={styles.registerbtn}>Login</button>
                </div>
            </form>
        </Layout>
    )
}