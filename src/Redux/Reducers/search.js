import {
  SEARCH_FOR_LANGUAGE,
  RESET_SEARCH_RESULTS,
  SEARCH_FOR_LANGUAGE_FAILED,
  SEARCH_FOR_LANGUAGE_SUCCEEDED
} from 'Redux/Types/SearchTypes';

const INITIAL_STATE = {
  searchTerm: '',
  fetching: false,
  searchResults: [],
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case SEARCH_FOR_LANGUAGE: {
      return {
        ...state,
        fetching: true,
        searchResults: [],
        searchTerm: payload.searchTerm,
      };
    }
    case SEARCH_FOR_LANGUAGE_FAILED: {
      return {
        ...state,
        fetching: false,
      };
    }
    case SEARCH_FOR_LANGUAGE_SUCCEEDED: {
      return {
        ...state,
        fetching: false,
        searchResults: payload,
      };
    }
    case RESET_SEARCH_RESULTS: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};
