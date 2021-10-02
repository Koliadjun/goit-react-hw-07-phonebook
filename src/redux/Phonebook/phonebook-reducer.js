import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import actions from './phonebook-type';
import { addContact, deleteContact, changeFilter } from './phonebook-action';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actions.ADD:
//       return [...state, payload];

//     case actions.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actions.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({ items, filter });
