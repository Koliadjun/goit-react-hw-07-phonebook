export const getFilteredData = state => {
  const { items, filter } = state.contacts;
  const normalizeFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

export const getFilterValue = state => state.contacts.filter;
