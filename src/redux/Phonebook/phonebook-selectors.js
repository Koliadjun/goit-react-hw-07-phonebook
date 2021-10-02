import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getLoading = state => state.contact.isLoading;

export const getFilteredData = createSelector(
  [getItems, getFilterValue],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  },
);
