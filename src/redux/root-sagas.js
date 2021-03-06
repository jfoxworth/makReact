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

import { all, call } from "@redux-saga/core/effects";
import { userSagas } from './user/user.sagas';
import { designsSagas } from './designs/designs.sagas';
import { projectsSagas } from './projects/projects.sagas';
import { versionsSagas } from './versions/versions.sagas';
import { signoffsSagas } from './signoffs/signoffs.sagas';
import { signoffReqsSagas } from './signoffReqs/signoffReqs.sagas';
import { userdataSagas } from './userdata/userdata.sagas';
import { ordersSagas } from './orders/orders.sagas';


export default function* rootSaga(){
  yield all([
    call(userSagas),
    call(designsSagas),
    call(projectsSagas),
    call(versionsSagas),
    call(signoffsSagas),
    call(signoffReqsSagas),
    call(userdataSagas),
    call(ordersSagas)
  ])
}