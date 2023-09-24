// creating a function to authorize and get the access token from the spotify web Api to make the call
// let token = [];
const apiController = (function () {
  const clientId = "95668393ba164f3aab310928cd73ab62";
  const clientSecret = "149fd8f6794548c993eacd11f2cc0e22";

  const getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic" + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });
    const data = await result.json();
    // token = data.acess_token;
    return data.acess_token;
    // console.log(data);
  };
})();
// token = apiController;
// console.log(token);
// console.log(apiController);
