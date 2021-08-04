import { createSelector } from 'reselect';

export const selectVersions = state => {
  return state.versions;
}

export const selectIsVersionsFetching = createSelector(
  [selectVersions],
  versions => versions.isFetching
)