import { FETCH_CHARACTERS, CHARACTERS, } from './types';
import mockCharacters from '../../services/characters/mockCharacters';

const INITIAL_STATE = {
    characters: {
        isLoading: false,
        offset: 0,
        limit: 48,
        items: [],
        // items: mockCharacters,
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS.REQUEST:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isLoading: true,
                }
            }

        case FETCH_CHARACTERS.SUCCESS:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isLoading: false,
                    offset: state.characters.offset + state.characters.limit,
                    items: state.characters.items.concat(
                        ...action.characters.map(val => ({
                            id: val.id,
                            name: val.name,
                            thumbnail: val.thumbnail,
                            comics: {
                                available: val.comics.available,
                            },
                        }))
                    ),
                }
            }

        case CHARACTERS.RESET:
            return {
                ...state,
                characters: {
                    ...INITIAL_STATE.characters,
                    isLoading: true,
                }
            }

        default:
            return state
    }
}

export default reducer;