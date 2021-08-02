import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import designsReducer from './designs/designs.reducer';
import projectsReducer from './projects/projects.reducer';

export default combineReducers({
  user:userReducer,
  designs:designsReducer,
  projects:projectsReducer
})