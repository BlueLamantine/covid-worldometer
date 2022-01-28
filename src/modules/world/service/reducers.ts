import {
    createEntityAdapter,
    createSlice,
    EntityState,
} from '@reduxjs/toolkit';
import { SummaryOfCountry, Global } from '../../../typedef';
import { loadCOVIDStatisticsThunk } from './actions';

export const summariesAdapter = createEntityAdapter<SummaryOfCountry>({
    selectId: country => country.CountryCode,
    sortComparer: (a, b) => b.TotalConfirmed - a.TotalConfirmed,
});

type State = {
    global: Global | undefined;
    summaryByCountries: EntityState<SummaryOfCountry>;
};
const defaultState: State = {
    global: undefined,
    summaryByCountries: summariesAdapter.getInitialState(),
};

export const world = createSlice({
    name: 'world',
    initialState: defaultState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            loadCOVIDStatisticsThunk.fulfilled,
            (state, { payload }) => {
                state.global = payload.Global;
                summariesAdapter.setAll(
                    state.summaryByCountries,
                    payload.Countries
                );
            }
        );
    },
});

export default world.reducer;
