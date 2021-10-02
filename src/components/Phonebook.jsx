import PropTypes from 'prop-types';

import s from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
function Phonebook() {
  // const [contactData, setContactData] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contactData));
  // }, [contactData]);

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.subTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
};

export default Phonebook;
