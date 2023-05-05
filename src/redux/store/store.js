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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// export const store = configureStore({
//   reducer: {
//     contact: contactReducer	,
//     filter: filterReducer,
//     signup: persistedReducer,
//   },

// });

export const persister = persistStore(store);
export default store;
