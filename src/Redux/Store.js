import { createStore, combineReducers } from 'redux';
import serviceReducer from './Reducers/serviceReducer'

const rootReducer = combineReducers({
  service: serviceReducer
});

export const store = createStore(rootReducer)
