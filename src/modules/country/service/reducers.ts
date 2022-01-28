import {
    createEntityAdapter,
    createSlice,
    EntityState,
} from '@reduxjs/toolkit';
import { Country, CountryDetails } from '../../../typedef';
import { loadCountryDetailsThunk, loadCountriesThunk } from './actions';

export const countriesAdapter = createEntityAdapter<Country>({
    selectId: country => country.Slug,
    sortComparer: (a, b) => b.Country.localeCompare(a.Country),
});

type State = {
    allCountries: EntityState<Country>;
    countryStatistics: CountryDetails[];
};

const defaultState: State = {
    allCountries: countriesAdapter.getInitialState(),
    countryStatistics: [],
};

export const country = createSlice({
    name: 'country',
    initialState: defaultState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadCountriesThunk.fulfilled, (state, { payload }) => {
                countriesAdapter.setAll(state.allCountries, payload);
            })
            .addCase(
                loadCountryDetailsThunk.fulfilled,
                (state, { payload }) => {
                    state.countryStatistics = payload;
                }
            );
    },
});

export default country.reducer;
