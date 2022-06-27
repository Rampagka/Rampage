import {JSO, Popup} from 'jso'
  let client = new JSO({
    providerID: "",
    client_id: "api-client",
    redirect_uri: "http://localhost:8080/", // The URL where you is redirected back, and where you perform run the callback() function.
    authorization: "https:auth.divinepizza.ru/oauth2/authorize",
    // scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
  })
  client.getToken(opts)
  .then((token) => {
    console.log("I got the token: ", token)
  })
export default client
