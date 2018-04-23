import moment from 'moment';
import md5 from 'crypto-js/md5';

export const TIME_STAMP = moment().unix();
export const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const HASH = md5(`${TIME_STAMP}${PRIVATE_KEY}${PUBLIC_KEY}`).toString();