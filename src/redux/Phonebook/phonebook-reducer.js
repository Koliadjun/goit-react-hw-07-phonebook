import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { addContact, deleteContact, changeFilter } from './phonebook-action';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
