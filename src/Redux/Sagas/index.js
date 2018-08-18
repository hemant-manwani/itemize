import { fork } from 'redux-saga/effects';

import search from './search';


export default function* rootSaga() {
  yield [
    fork(search),
  ];
}
