// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './Phonebook/phonebook-reducer';

// const rootReducer = combineReducers({ contacts: contactReducer });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
