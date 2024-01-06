import { createSelector } from "@reduxjs/toolkit";

const allSelectors = (state) => state.sushis;

export const selectItems = createSelector(
  allSelectors,
  (sushis) => sushis.items
);

export const selectError = createSelector(
  allSelectors,
  (sushis) => sushis.error
);

export const selectLoading = createSelector(
  allSelectors,
  (sushis) => sushis.isLoading
);
