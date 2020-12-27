import { ReactElement } from 'react';
import styles from './register.module.scss';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import AuthBtn from '../../components/AuthBtn/AuthBtn';

export default function Login(): ReactElement {
    return (
        <Layout>
            <form>
                <div className={styles.form_container}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label><b>Email</b></label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        id="email"
                        required />

                    <label><b>Password</b></label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        id="psw"
                        required />

                    <label><b>Repeat Password</b></label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Repeat Password"
                        name="psw-repeat"
                        id="psw-repeat"
                        required />

                    <p>By creating an account you agree to our <a href="#">Terms of Privacy</a>.</p>

                    <AuthBtn btn={'Register'} />
                </div>

                <div className="container signin">
                    <p>Already have an account? <Link href={'/login'}><a className={styles.signinBtn} >Log in</a></Link>.</p>
                </div>
            </form>
        </Layout>
    )
}