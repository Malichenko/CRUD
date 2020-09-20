// Types
import { types } from "./types";

const initialState = Object.freeze({
  isLoading: false,
  error: false,
  seed: null,
  profile: null,
});

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_START_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.USER_STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case types.USER_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        profile: null,
      };
    case types.USER_FILL:
      return {
        ...state,
        error: false,
        profile: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
