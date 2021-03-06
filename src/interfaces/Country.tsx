export interface Country {
    name: string;
    region: string;
    subregion: string;
}

export interface CountryApi {
    countries: [
        {
            alpha2Code: string;
            alpha3Code: string;
            altSpellings: string[];
            area: number;
            borders: string[];
            callingCodes: string[];
            capital: string;
            cioc: string;
            currencies: object[];
            demonym: string;
            flag: string;
            gini: number;
            languages: object[];
            latlng: number[];
            name: string;
            nativeName: string;
            numericCode: string;
            population: number;
            region: string;
            regionalBlocs: object[];
            subregion: string;
            timezones: string[];
            topLevelDomain: string[];
            translations?: {
                de: string;
                es: string;
            }
        }
    ]
}