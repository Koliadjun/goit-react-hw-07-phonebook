// import * as contactsAction from "./phonebook-action";
import * as contactsAPI from 'services/phonebookAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  },
);
export const addContact = createAsyncThunk(
  'phonebook/addContacts',
  async contact => {
    const contacts = await contactsAPI.addContact(contact);
    return contacts;
  },
);
export const deleteContacts = createAsyncThunk(
  'phonebook/deleteContactById',
  async contactId => {
    await contactsAPI.deleteContactById(contactId);
    return contactId;
  },
);

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsAction.fetchContactsRequest());

//     try {
//         const contacts = await contactsAPI.fetchContacts()
//         dispatch(contactsAction.fetchContactsSuccess(contacts))
//     }
//     catch (error) {
//         dispatch(contactsAction.fetchContactsError(error.message))
//     }

// }

// export const fetchContactById = (id) => async dispatch => {
//     dispatch(contactsAction.fetchContactsRequest())

//     try {
//         const book = await contactsAPI.fetchContactById(id)
//         dispatch(contactsAction.fetchContactsSuccess(book))
//     } catch (error) {
//         dispatch(contactsAction.fetchContactsError(error.message))
//     }
// }
