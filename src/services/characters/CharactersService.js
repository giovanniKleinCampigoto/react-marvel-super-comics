import Api from '../../utils/Api';

class CharactersService {
    static getCharacters(params) {
        return Api.get('/v1/public/characters', params);
    }
}

export default CharactersService;