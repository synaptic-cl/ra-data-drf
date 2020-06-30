import { fetchUtils } from 'react-admin'


export default (url, options={}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }

    const accessToken = localStorage.getItem('accessToken');
    if (!!accessToken) {
      options.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return fetchUtils.fetchJson(url, options);
}
