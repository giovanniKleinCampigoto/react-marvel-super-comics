import { combineReducers } from 'redux';

import charactersReducer from './characters/reducer';

export default combineReducers({
    charactersReducer,
});