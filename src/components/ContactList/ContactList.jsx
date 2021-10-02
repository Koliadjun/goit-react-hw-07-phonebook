import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './ContactList.module.css';
import { contactsOperations, contactsSelectors } from 'redux/Phonebook';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getFilteredData);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <button
            className={s.button}
            onClick={() =>
              dispatch(contactsOperations.deleteContacts(contact.id))
            }
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
