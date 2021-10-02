import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000';

axios.defaults.baseURL = 'https://contacts-json-api.herokuapp.com/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}
export async function deleteContactById(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}
