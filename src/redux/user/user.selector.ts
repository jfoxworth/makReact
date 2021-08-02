import { createSelector } from 'reselect';

export const selectUser = (state:any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user)=>user.currentUser
)