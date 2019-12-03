import { GET_USERS, SET_LOADING, SET_ERRORS, CLEAR_ERRORS, GET_SINGLE_USER } from '../types';

const initialState = {
  users: [],
  user: null,
  errors: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        errors: null,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
