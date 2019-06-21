import axios from 'axios';

const initialState = {
  superhero: [],
  stats: [],
  isErr: false,
  isLoading: false
};

const GET_SUPERHEROES = 'GET_SUPERHEROES';
const SUPERHERO_DETAILS = 'SUPERHERO_DETAILS';

export const getSuperheroes = (input) => {
  return {
    type: GET_SUPERHEROES,
    payload: axios.get(`/api/search/${input}`)
  };
};

export const heroStats = (id) => {
  // console.log(id);
  return {
    type: SUPERHERO_DETAILS,
    payload: axios.get(`/api/search/hero/${id}`)
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_SUPERHEROES}_FULFILLED`:
      return {
        ...state,
        superhero: action.payload.data.results,
        isLoading: false
      };
    case `${GET_SUPERHEROES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_SUPERHEROES}_REJECTED`:
      return {
        ...state,
        isErr: true
      };
    case `${SUPERHERO_DETAILS}_FULFILLED`:
      return {
        ...state,
        stats: action.payload.data,
        isLoading: false
      };
    case `${SUPERHERO_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${SUPERHERO_DETAILS}_REJECTED`:
      return {
        ...state,
        isErr: true
      };
    default:
      break;
  }
}
