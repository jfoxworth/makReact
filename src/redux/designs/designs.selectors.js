import { createSelector } from 'reselect';

export const selectDesigns = state => {
  return state.designs;
}

export const selectIsDesignsFetching = createSelector(
  [selectDesigns],
  designs => designs.isFetching
)