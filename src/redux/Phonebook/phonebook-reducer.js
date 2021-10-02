import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { changeFilter } from './phonebook-action';
import {
  fetchContacts,
  addContact,
  deleteContacts,
} from './phonebook-operation';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,

  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,

  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
});

export default combineReducers({ items, isLoading, error, filter });
