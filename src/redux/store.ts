import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import rootSaga from "./root-sagas";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createWrapper } from 'next-redux-wrapper';


 
 export const makeStore = (initialState:any) => {
   const sagaMiddleware = createSagaMiddleware();
   const middleware = applyMiddleware(sagaMiddleware);
 
   const store = createStore(
     rootReducer,
     initialState,
     composeWithDevTools(middleware),
   );
 
   sagaMiddleware.run(rootSaga);
   return store;
 };
 
 export const wrapper = createWrapper(makeStore);
 