import { useEffect, useState, ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './country.module.scss';
import { useRouter } from 'next/router';
import Loading from '../../utils/loading';

const getCountry = async (id: number) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const country = await res.json();

    return country;
}

const Country = ({ country, loading: serverLoading }: any) => {


    const [border, setBorder] = useState([]);

    const getBorders = async () => {

        const borders = await Promise.all(country.borders.map((border: any) => getCountry(border)))

        setBorder(borders)
    }

    useEffect(() => {
        getBorders()
    }, [])


    const [loading, setLoading] = useState(serverLoading)

    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${router.query.id}`)
            const countries = await res.json()

            setLoading(countries)
        }

        if (!serverLoading) {
            load()
        }
    }, [])

    if (!loading) {
        return <Loading />
    }

    console.log(border);

    return (
        <Layout title={country.name}>
            <div className={styles.container}>

                <div className={styles.container_left}>
                    <div className={styles.overview_panel}>
                        <img src={country.flag} alt={country.name} ></img>
                    </div>

                    <h1 className={styles.overview_name}>{country.name}</h1>

                    <div className={styles.overview_region}>
                        {country.region}
                    </div>

                    <div className={styles.overview_numbers}>

                        <div className={styles.overview_population}>
                            <div className={styles.overview_value}>{country.population}</div>
                            <div className={styles.overview_label}>Population</div>
                        </div>

                        <div className={styles.overview_area}>
                            <div className={styles.overview_value}>{country.area}</div>
                            <div className={styles.overview_label}>Area</div>
                        </div>
                    </div>
                </div>

                <div className={styles.container_right}>
                    <div className={styles.details_panel}>
                        <h4 className={styles.details_panel_heading}>Details</h4>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Capital</div>
                            <div className={styles.details_panel_value}>{country.capital}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Languages</div>
                            <div className={styles.details_panel_value}>{country.languages.map(({ name }) => name).join(', ')}</div>

                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Currencies</div>
                            <div className={styles.details_panel_value}>{country.currencies.map(({ name }) => name).join(', ')}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Native name</div>
                            <div className={styles.details_panel_value}>{country.nativeName}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Gini</div>
                            <div className={styles.details_panel_value}>{country.gini} %</div>
                        </div>

                        <div className={styles.details_panel_borders}>

                            <div className={styles.details_panel_border_label}>Neighbouring Countries</div>

                            <div className={styles.details_panel_borders_container}>

                                {border.map(({ flag, name }) =>
                                    <div className={styles.details_panel_borders_country}>
                                        <img src={flag} alt={name}></img>
                                        <div className={styles.details_panel_borders_name}>{name}</div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout >
    )
}

export default Country;


export async function getServerSideProps({ params, req }: any): Promise<{
    loading: boolean;
    props?: undefined;
} | {
    props: {
        country: any;
    };
    loading?: undefined;
}> {

    if (!req) {
        return {
            loading: true
        }
    }

    const res: Response = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
    const country = await getCountry(params.id)
    
    return {
        props: {
            country
        },
    }
}