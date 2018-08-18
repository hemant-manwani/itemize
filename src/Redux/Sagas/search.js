import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import { Api } from 'Service';

import * as SearchTypes from 'Redux/Types/SearchTypes';
import * as SearchActions from 'Redux/Actions/SearchActions';

function* searchForLanguage({ payload }) {
  try {
    const response = yield call(
      Api.searchForLanguage, payload
    );
    const { success, results = [], error } = response;
    if (success) {
      yield put(SearchActions.searchForLanguageSucceeded(results));
    } else {
      yield put(SearchActions.searchForLanguageFailed(
        new Error(error.info)
      )
      );
    }
  } catch (err) {
    yield put(SearchActions.searchForLanguageFailed(err));
  }
}

export default function* searchForLanguageSaga() {
  yield takeLatest(SearchTypes.SEARCH_FOR_LANGUAGE, searchForLanguage);
}
