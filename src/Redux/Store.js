import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import serviceReducer from './Reducers/serviceReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist : ['services']
};

const rootReducer = combineReducers({
  service: persistReducer(persistConfig, serviceReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
