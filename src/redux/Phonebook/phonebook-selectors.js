export const getFilteredData = state => {
  const { items } = state.contacts;
  const normalizeFilter = getFilterValue(state).toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

export const getFilterValue = state => state.contacts.filter;
