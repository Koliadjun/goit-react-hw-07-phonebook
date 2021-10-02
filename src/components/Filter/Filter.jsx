import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import { changeFilter } from '../../redux/Phonebook/phonebook-action';

const Filter = ({ value, onChange }) => {
  const id = shortid.generate();
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
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
