import { useState } from 'react';
import CountryTable from '../components/CountryTable/CountryTable';
import SearchInput from '../components/SearchField/SearchField';
import { Country } from '../interfaces/Country';
import { CountryApi } from '../interfaces/Country';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';

export default function Home({ countries }: CountryApi) {

  const [keyword, setKeyword] = useState("");

  const filteredCountry = countries.filter(
    (country: Country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword))

  const onIputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className={styles.count}>Found {countries.length} countries</div>

      <SearchInput placeholder='Filter by Name,Region or SubRegion' onChange={onIputChange} ></SearchInput>

      <CountryTable countries={filteredCountry} ></CountryTable>

    </Layout>

  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
}