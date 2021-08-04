import { all, call } from "@redux-saga/core/effects";
import { userSagas } from './user/user.sagas';
import { designsSagas } from './designs/designs.sagas';
import { projectsSagas } from './projects/projects.sagas';
import { versionsSagas } from './versions/versions.sagas';


export default function* rootSaga(){
  yield all([
    call(userSagas),
    call(designsSagas),
    call(projectsSagas),
    call(versionsSagas)
  ])
}