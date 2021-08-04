/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*/

// Redux items
import { createSelector } from 'reselect';

export const selectProjects = state => {
  return state?.projects;
}

export const selectIsProjectsFetching = createSelector(
  [selectProjects],
  projects => projects.isFetching
)