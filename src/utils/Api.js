import axios from 'axios';
import { TIME_STAMP, PUBLIC_KEY, HASH,} from './api.configs';

const BASE_URL = "https://gateway.marvel.com";

class Api {
    static get(uri, params) {
        return axios.get(`${BASE_URL}${uri}`, {
            params: {
                ts: TIME_STAMP,
                apikey: PUBLIC_KEY,
                hash: HASH,
                ...params
            }
        });
    }
}

export default Api;