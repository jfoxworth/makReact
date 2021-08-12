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

import { createSelector } from 'reselect';

export const selectVersions = (state:any) => {
  return state.versions;
}

export const selectIsVersionsFetching = createSelector(
  [selectVersions],
  versions => versions.isFetching
)