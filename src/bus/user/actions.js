// Core
import { batch } from "react-redux";
import { replace } from "connected-react-router";

// Book
import { book } from "../../routes/book";

// Types
import { types } from "./types";

// Api
import { api } from "../../api";

export const userActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.USER_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.USER_STOP_FETCHING,
    };
  },
  setFectchingError: (error) => {
    return {
      type: types.USER_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  userFill: (payload) => {
    return {
      type: types.USER_FILL,
      error: false,
      payload,
    };
  },
  // Async
  setProfile: (payload) => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.getProfile(payload);

      if (response.status === 200) {
        const { results } = await response.json();
        const result = results && { ...results[0] };

        dispatch(userActions.userFill(result));
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          localStorage.removeItem("seed");
          dispatch(userActions.setFectchingError(error));
          dispatch(replace(book.home.url));
        });
      }
    } catch (error) {
      batch(() => {
        dispatch(
          userActions.setFectchingError({
            status: error.message,
          }),
        );
        localStorage.removeItem("seed");
        dispatch(replace(book.home.url));
      });
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
});
