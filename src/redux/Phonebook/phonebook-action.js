import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import actionsTypes from './phonebook-type';

export const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: { id: shortid.generate(), name, number },
}));

// export const addContact = ({ name, number }) => ({
//   type: actionsTypes.ADD,
//   payload: { id: shortid.generate(), name, number },
// });

export const deleteContact = createAction('phonebook/delete');

// export const deleteContact = contactId => ({
//   type: actionsTypes.DELETE,
//   payload: contactId,
// });

export const changeFilter = createAction('phonebook/changeFilter');

// export const changeFilter = value => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: value,
// });
