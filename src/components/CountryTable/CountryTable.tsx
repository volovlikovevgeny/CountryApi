import { useState } from 'react';
// import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'
// import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
import Link from 'next/link';
import styles from './CountryTable.module.css'

const orderBy = (countries, value, direction) => {
    if (direction === 'asc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1)
    }

    if (direction == "desc") {
        return [...countries].sort((a, b) => a[value] > b[value] ? -1 : 1)
    }
    return countries
}


const SortArrow = ({ direction }) => {
    if (!direction) return <></>

    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow}>
                {/* <KeyboardArrowDownRounded /> */}
            </div>
        )
    } else {
        return (
            <div className={styles.heading_arrow}>
                {/* <KeyboardArrowUpRounded /> */}
            </div>
        )
    }
}


const CountryTable = ({ countries }) => {
    const [direction, setDirection] = useState("")
    const [value, setValue] = useState("")
    const orderedCountries = orderBy(countries, value, direction)

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc')
        } else if (direction === 'desc') {
            setDirection('asc')
        } else {
            setDirection(null)
        }
    }

    const setValueAndDirection = (value) => {
        switchDirection()
        setValue(value)
    }
    return (
        <div>
            <div className={styles.heading}>
                <button
                    className={styles.heading_name}
                    onClick={() => setValueAndDirection('name')}
                >
                    <div>Name</div>

                    <SortArrow direction={direction} />
                </button>

                <button
                    className={styles.heading_population}
                    onClick={() => setValueAndDirection('population')}
                >
                    <div>Population</div>

                    <SortArrow direction={direction} />

                </button>
            </div>

            {
                orderedCountries.map(country =>
                    <Link href={`/country/${country.alpha3Code}`}>
                        <div className={styles.row}>
                            <div className={styles.name}>{country.name}</div>
                            <div className={styles.population}>{country.population}</div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}
export default CountryTable