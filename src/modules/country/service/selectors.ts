import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../store/typedef';
import { countriesAdapter } from './reducers';

const { selectById } = countriesAdapter.getSelectors();

export const selectCountries = (state: AppState) => state.country.allCountries;

export const selectCountry = (id: string) =>
    createSelector(selectCountries, countries => selectById(countries, id));

export const selectCountryStatistics = (state: AppState) =>
    state.country.countryStatistics;

export const getStatisticsPoints = createSelector(
    selectCountryStatistics,
    statistics => {
        const points = statistics.map<(Date | number)[]>((item, i, array) => {
            if (!i) return []; //exclude day before picked date

            const { Confirmed, Deaths, Recovered } = array[i - 1];
            const recoveredValue = item.Recovered - Recovered;
            return [
                new Date(item.Date),
                item.Confirmed - Confirmed,
                item.Deaths - Deaths,
                // API does not provide data about recovered cases after 04.08.21
                recoveredValue > 0 ? recoveredValue : 0,
            ];
        });

        points.shift();
        return points;
    }
);
