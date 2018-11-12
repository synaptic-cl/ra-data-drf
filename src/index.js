import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';


/**
 * Maps react-admin queries to the default format of Django REST Framework
 */
const drfProvider = (apiUrl, httpClient=fetchUtils.fetchJson) => {

    /**
     * @param {String} type React-admin request type, e.g. 'GET_LIST'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params Request parameters. Depends on the request type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertDataRequestToHttp = (type, resource, params) => {
        let url = "";
        let options = {};

        switch(type){
            case CREATE:
                url = `${apiUrl}/${resource}/`;
                options.method = 'POST';
                options.body = JSON.stringify(params.data);
                break;
            case GET_ONE:
                url = `${apiUrl}/${resource}/${params.id}/`;
                break;
            case UPDATE:
                url = `${apiUrl}/${resource}/${params.id}/`;
                options.method = 'PUT';
                options.body = JSON.stringify(params.data);
                break;
            default:
                throw new Error(`Unsupported Data Provider request type ${type}`);
        }

        return { url, options };
    }

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type React-admin request type, e.g. 'GET_LIST'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params Request parameters. Depends on the request type
     * @returns {Object} Data response
     */
    const convertHttpResponse = (response, type, resource, params) => {
        const { headers, json } = response;

        switch (type) {
            case CREATE:
                return { data: { ...params.data, id: json.id } };
            default:
                return { data: json };
        }
    }

    /**
     * @param {String} type React-admin request type, e.g. 'GET_LIST'
     * @param {string} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
    return (type, resource, params) => {
        const { url, options } = convertDataRequestToHttp(type, resource, params);
        return httpClient(url, options)
            .then(response => convertHttpResponse(response, type, resource, params));
    }

}
