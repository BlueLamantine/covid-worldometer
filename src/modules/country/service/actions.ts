import { createAsyncThunk } from '@reduxjs/toolkit';
import { Country, CountryDetails, URL } from '../../../typedef';

export const loadCountriesThunk = createAsyncThunk(
    'load-countries',
    async () => {
        return await fetch(`https://api.covid19api.com/countries`)
            .then(res => res.json())
            .then((data: Country[]) => data);
    }
);

export const loadCountryDetailsThunk = createAsyncThunk<CountryDetails[], URL>(
    'load-covid-statistics-by-country',
    async ({ countryName, startDate, endDate }: URL) => {
        return await fetch(
            `https://api.covid19api.com/total/country/${countryName}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
        )
            .then(res => res.json())
            .then((data: CountryDetails[]) => data);
    }
);
