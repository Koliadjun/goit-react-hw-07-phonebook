import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './ContactList.module.css';
import { deleteContact } from '../../redux/Phonebook/phonebook-action';

function ContactList({ contacts, onClick }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <button
            className={s.button}
            onClick={() => onClick(contact.id)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    {},
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

const getFilteredData = (items, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredData(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
