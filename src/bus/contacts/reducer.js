// Types
import { types } from "./types";

const initialState = Object.freeze({
  isLoading: false,
  error: false,
  contacts: null,
  viewMode: "tabular",
  filterData: null,
  pageState: null,
});

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTACTS_START_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.CONTACTS_STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case types.CONTACTS_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        profile: null,
      };
    case types.CONTACTS_FILL:
      return {
        ...state,
        error: false,
        contacts: payload,
      };
    case types.CONTACTS_VIEW:
      return {
        ...state,
        viewMode: payload,
      };
    case types.CONTACTS_SET_FILTER_DATA:
      return {
        ...state,
        filterData: payload,
      };
    case types.CONTACTS_SET_PAGE_STATE:
      const data = payload
        ? {
            ...state.pageState,
            ...payload,
          }
        : null;
      return {
        ...state,
        pageState: data,
      };
    default:
      return {
        ...state,
      };
  }
};
