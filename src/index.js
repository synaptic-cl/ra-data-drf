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
        let url = ""
        let options = {}

        switch(type){
            default:
                throw new Error(`Unsupported Data Provider request type ${type}`)
        }

        return { url, options }
    }

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type React-admin request type, e.g. 'GET_LIST'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params Request parameters. Depends on the request type
     * @returns {Object} Data response
     */
    const convertHttpResponse = (response, type, resource, params) => {
        return {}
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
