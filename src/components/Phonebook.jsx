import s from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
function Phonebook() {
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

export default Phonebook;
