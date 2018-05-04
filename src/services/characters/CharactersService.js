import Api from '../../utils/Api';

class CharactersService {
    static getCharacters(params) {
        return Api.get('/v1/public/characters', params);
    }

    static async getCharacter(characterId) {
        return Api.get(`/v1/public/characters/${characterId}`);
    }
}

export default CharactersService;