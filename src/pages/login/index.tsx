import { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './login.module.scss';
import AuthBtn from '../../components/AuthBtn/AuthBtn';


export default function Login(): ReactElement {
    return (
        <Layout>
            <form>
                <div className={styles.form_container}>
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
                        
                    <AuthBtn btn={'login'} />
                </div>
            </form>
        </Layout>
    )
}