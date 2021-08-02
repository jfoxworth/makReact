import { createSelector } from 'reselect';

export const selectProjects = state => {
  return state?.projects;
}

export const selectIsProjectsFetching = createSelector(
  [selectProjects],
  projects => projects.isFetching
)