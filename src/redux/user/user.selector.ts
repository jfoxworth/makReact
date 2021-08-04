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

export const selectUser = (state:any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user)=>user.currentUser
)