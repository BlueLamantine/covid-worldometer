import { createAsyncThunk } from '@reduxjs/toolkit';
import { COVIDStatistics } from '../../../typedef';

export const loadCOVIDStatisticsThunk = createAsyncThunk<COVIDStatistics>(
    'load-covid-statistics',
    async () => {
        return await fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then((data: COVIDStatistics) => data);
    }
);
