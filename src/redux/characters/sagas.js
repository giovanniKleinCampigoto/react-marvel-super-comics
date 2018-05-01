import { call, put, takeEvery, select, } from 'redux-saga/effects';
import { FETCH_CHARACTERS, CHARACTERS, } from './types';

import { CharactersService, } from '../../services';

// selectors
const getCharactersReducer = state => state.charactersReducer;

export function* fetchCharacters(action) {
    try {
        if (action.resetReducer) {
            yield put({ type: CHARACTERS.RESET });
        }

        const { characters } = yield select(getCharactersReducer);

        const response = yield call(
            CharactersService.getCharacters,
            { limit: characters.limit, offset: characters.offset }
        );

        yield put({ type: FETCH_CHARACTERS.SUCCESS, characters: response.data.data.results });
    } catch (e) {
        // handle error   
    }
}

// here we can pass an array of sagas to export to the rootSagas
export default [
    takeEvery(FETCH_CHARACTERS.REQUEST, fetchCharacters),
];