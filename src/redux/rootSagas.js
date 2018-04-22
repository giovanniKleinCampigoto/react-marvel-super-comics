import { all } from 'redux-saga/effects';

import { initialSagas } from './initialEffects';

export default function* rootSagas() {

    // here we initialize all the sagas from different files
    yield all([
        ...initialSagas,
    ]);
}