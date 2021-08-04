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


import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import designsReducer from './designs/designs.reducer';
import projectsReducer from './projects/projects.reducer';
import versionsReducer from './versions/versions.reducer';


export default combineReducers({
  user:userReducer,
  designs:designsReducer,
  projects:projectsReducer,
  versions:versionsReducer
})