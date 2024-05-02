// filterActions.js

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (key, value) => ({
    type: UPDATE_FILTER,
    payload: { key, value }
});