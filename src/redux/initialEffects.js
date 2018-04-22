// THIS FILE IS ONLY TO INITIALIZE THE SAGA - IT GONNA BE DELETED SOON

import { call, put, takeEvery } from 'redux-saga/effects';

export function* fetchSomething(action) {
    try {
        // code here
    } catch (e) {
        // handle error   
    }
}

// here we can pass an array of sagas to export to the rootSagas
export const initialSagas = [
    takeEvery("INITIAL_REQUEST", fetchSomething),
];