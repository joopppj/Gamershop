import { createSelector } from 'reselect';

const selectHomeMenu = state => state.HomeMenu;

export const selectHomeMenuCategories = createSelector(
    [selectHomeMenu],
    HomeMenu => HomeMenu.categories
);