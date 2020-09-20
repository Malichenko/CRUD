// Core
import { batch } from "react-redux";

// Types
import { types } from "./types";

// Api
import { api } from "../../api";

export const contactsActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.CONTACTS_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.CONTACTS_STOP_FETCHING,
    };
  },
  setFectchingError: (error) => {
    return {
      type: types.CONTACTS_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  contactsFill: (payload) => {
    return {
      type: types.CONTACTS_FILL,
      error: false,
      payload,
    };
  },
  contactsView: (payload) => {
    return {
      type: types.CONTACTS_VIEW,
      payload,
    };
  },
  setFilterData: (payload) => {
    return {
      type: types.CONTACTS_SET_FILTER_DATA,
      payload,
    };
  },
  setPageState: (payload) => {
    return {
      type: types.CONTACTS_SET_PAGE_STATE,
      payload,
    };
  },
  // Async
  setContacts: (payload) => async (dispatch) => {
    dispatch(contactsActions.startFetching());
    try {
      const response = await api.users.getContacts(payload);

      if (response.status === 200) {
        let { results } = await response.json();

        results = results.map((el, idx) => {
          return {
            fullname: `${el.name.title}. ${el.name.first} ${el.name.last}`,
            idx: idx + 1,
            ...el,
          };
        });

        dispatch(contactsActions.contactsFill(results));
      } else {
        const error = {
          status: response.status,
        };

        dispatch(contactsActions.setFectchingError(error));
      }
    } catch (error) {
      dispatch(
        contactsActions.setFectchingError({
          status: error.message,
        }),
      );
    } finally {
      batch(() => {
        dispatch(contactsActions.stopFetching());
      });
    }
  },
});
