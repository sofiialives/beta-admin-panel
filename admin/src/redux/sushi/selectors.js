import { createSelector } from "@reduxjs/toolkit";

const allSelectors = (state) => state.sushis;

export const selectItems = createSelector(
  allSelectors,
  (sushis) => sushis.items
);
export const selectLoading = createSelector(
  allSelectors,
  (sushis) => sushis.isLoading
);
export const selectError = createSelector(
  allSelectors,
  (sushis) => sushis.error
);
export const selectName = createSelector(allSelectors, (sushis) => sushis.name);
export const selectText = createSelector(allSelectors, (sushis) => sushis.text);
export const selectPrice = createSelector(
  allSelectors,
  (sushis) => sushis.price
);
export const selectImg = createSelector(allSelectors, (sushis) => sushis.img);
