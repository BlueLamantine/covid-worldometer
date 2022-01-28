import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../store/typedef';
import { summariesAdapter } from './reducers';

const { selectAll, selectEntities, selectById } =
    summariesAdapter.getSelectors();

export const selectGlobalInfo = (state: AppState) => state.world.global;

export const selectSummariesState = (state: AppState) =>
    state.world.summaryByCountries;

export const selectSummaryById = (id: string) =>
    createSelector(selectSummariesState, summaries =>
        selectById(summaries, id)
    );

export const selectSummaries = createSelector(
    selectSummariesState,
    countriesState => selectAll(countriesState)
);

export const selectSummariesEntities = createSelector(
    selectSummariesState,
    summaries => selectEntities(summaries)
);
