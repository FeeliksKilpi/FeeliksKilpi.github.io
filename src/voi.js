const fetch = require('node-fetch');

const getAuthToken = {
    "country_code": "FI",
    "phone_number": "405453262"
}
const verifyToken = {
    "code": "123456",
    "token": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}

let token;

fetch("https://api.voiapp.io/v1/auth/verify/phone", {
    method: "POST",
    body: JSON.stringify(getAuthToken)
}).then(response => {
    console.log("Request complete! response: ", response);
    //token = response;
});

//console.log("This is now your token: " + token);

/*
fetch("https://api.voiapp.io/v1/auth/verify/code", {
    method: "POST",
    body: JSON.stringify(verifyToken)
}) */