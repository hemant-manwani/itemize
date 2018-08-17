import { createAction } from 'redux-actions';
import {
  SEARCH_FOR_LANGUAGE,
  RESET_SEARCH_RESULTS,
  SEARCH_FOR_LANGUAGE_FAILED,
  SEARCH_FOR_LANGUAGE_SUCCEEDED,
} from 'Redux/Types/SearchTypes';

export const searchForLanguage = createAction(SEARCH_FOR_LANGUAGE);
export const searchForLanguageFailed = createAction(SEARCH_FOR_LANGUAGE_FAILED);
export const searchForLanguageSucceeded = createAction(SEARCH_FOR_LANGUAGE_SUCCEEDED);

export const resetSearchResults = createAction(RESET_SEARCH_RESULTS);
