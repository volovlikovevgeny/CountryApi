import type { AppProps } from 'next/app';
import '../styles/global.styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
    </>
}

export default MyApp;
