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

// Redux Items
import { createSelector } from 'reselect';


export const selectDesigns = (state:any) => {
  return state.designs;
}

export const selectIsDesignsFetching = createSelector(
  [selectDesigns],
  designs => designs.isFetching
)