import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filterReducer } from 'redux/filterSlice/filterSlice';
import { contactReducer } from 'redux/contactSlice/contactSlice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  signup: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['signup'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
	serializableCheck: {
	  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
  }),
});

// export const store = configureStore({
//   reducer: {
//     contact: contactReducer	,
//     filter: filterReducer,
//     signup: persistedReducer,
//   },

// });

export const persistor = persistStore(store);
export default store;