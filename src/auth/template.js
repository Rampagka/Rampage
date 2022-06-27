import querystring from "querystring";

export default class Api {
    constructor(axios) {
        this.axios = axios
    }

    request(url = '', method = 'get', data = null, reqName) {
        const options = {
            url,
            method
        }
        if(data !== null) {
            options.data = data
        }
        if(reqName === 'LOGIN' || reqName === 'TOKEN') {
          options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          }
        }
        console.log(options)
        return this.axios(options).then(res => res.data).catch(res => res.data);
    }
}

