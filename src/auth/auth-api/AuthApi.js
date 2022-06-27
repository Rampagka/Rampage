import axios from "axios"
import Template from '../template.js'
import qs from "qs";

export default class Auth extends Template {
    constructor() {
        const authAxios = axios.create({
            baseURL: 'https://auth.divinepizza.ru',
            headers: {
            post: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            get: {
              'Access-Control-Allow-Origin': '*'
            }
            }
        });
        super(authAxios);
    }

    sendPhoneCode(phone) {
      return this.request("/auth/sendPhoneCode", "post", phone);
        // axios.post('https://auth.divinepizza.ru/auth/sendPhoneCode', {
        //   phone: phone,
        // })
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    }

    login(data) {
      let requestName = 'LOGIN'
      return this.request("/login", "post", qs.stringify(data), requestName);
    //   axios.post('https://auth.divinepizza.ru/login', qs.stringify(datas, {
    //     headers: {
    //       post:  {
    //         'Access-Control-Allow-Origin': '*',
    //         'content-type': 'application/x-www-form-urlencoded',
    //       }
    //     }
    //  } )
    }

    authorize(data) {
      let url = qs.stringify(data)
      return this.request("/oauth2/authorize?" + url, "get")
    }

    getToken(data) {
      let requestName = 'TOKEN'
      return this.request("/oauth2/token", "post", qs.stringify(data), requestName)
    }
  }
