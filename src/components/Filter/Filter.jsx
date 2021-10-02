import React from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.css';
import { changeFilter } from 'redux/Phonebook/phonebook-action';
import { contactsSelectors } from 'redux/Phonebook';

const Filter = () => {
  const id = shortid.generate();
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilterValue);

  return (
    <>
      <label htmlFor={id} className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={id}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </>
  );
};

export default Filter;
