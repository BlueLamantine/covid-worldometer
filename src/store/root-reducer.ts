import { combineReducers } from '@reduxjs/toolkit';
import { world } from '../modules/world/service/reducers';
import { country } from '../modules/country/service/reducers';
export const rootReducer = combineReducers({
    world: world.reducer,
    country: country.reducer,
});
