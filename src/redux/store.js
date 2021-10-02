import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
