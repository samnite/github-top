import axios from 'axios';
import { CLEAR_ERRORS, GET_USERS, SET_ERRORS, SET_LOADING } from '../types';

// You can change city manually
const city = 'kyiv';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    // Your personal GitHub token
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

// Query
const GET_ALL_USERS = `query {
    search(query: "location:${city}", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            avatarUrl
            login
            name
            bio
            url
            location
            email
          }
        }
      }
    }
  }`;

// Set Loading to true
export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
  dispatch({ type: CLEAR_ERRORS });
};

// Set errors
export const setErrors = err => dispatch => {
  dispatch({ type: SET_ERRORS, payload: err });
};

// Clear errors
export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};

// Fetch data of 10 users
export const getUsers = () => dispatch => {
  dispatch(setLoading());
  axiosGitHubGraphQL
    .post('', {
      query: GET_ALL_USERS,
    })
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data.data.search.edges });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch(setErrors(err.message));
    });
};
