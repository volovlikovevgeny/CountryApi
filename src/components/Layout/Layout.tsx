import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.scss';
import Logo from '../../assets/logo';

export default function Layout({ children, title = 'Countries' }: {
    children: any;
    title?: string;
}) {
    return (
        <div className={styles.container} >
            <Head>
                <title>{title}</title>
            </Head>

            <header className={styles.header}>
                <Link href={'/'}>
                    <a>
                        <Logo />
                    </a>
                </Link>

                <nav className={styles.navigation}>
                    <Link href='/login'><a>Login</a></Link>
                    <Link href='/register'><a>Register</a></Link>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>Created By <span className={styles.footer_span}>Jenya || All rights recerved</span></footer>
        </div>
    )
}