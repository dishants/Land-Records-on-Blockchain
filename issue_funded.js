var bitcoin = require('bitcoinjs-lib');
var request = require('request');

funded_address = 'moXvpRmNQXkfpggXmQGvE3gbp3QyM9cpdq'
// e.g. funded_ad'n2t19a46cBs2DdHs2sqfRwPGhoQjvqmefR';


function postToApi(api_endpoint, json_data, callback) {
    console.log(api_endpoint+': ', JSON.stringify(json_data));
    request.post({
        url: 'http://testnet.api.coloredcoins.org:80/v3/'+api_endpoint,
        headers: {'Content-Type': 'application/json'},
        form: json_data
    }, 
    function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body)
        }
        console.log('Status: ', response.statusCode);
        console.log('Body: ', JSON.stringify(body));
        return callback(null, body);
    });
};

var asset = {
    'issueAddress': funded_address,
    'amount': 1,
    'divisibility': 0,
    'fee': 5000,
    'reissueable':false,
    'metadata': {
        'assetId': '2',
        'assetName': 'Dishant',
        'issuer': 'Genius',
        'description': '0,0,5,5 Hash 20fd37c942f0f95b0a2215f336ba298438f3a0a5b11e6ae9c4f71ecb',

        }
    }



postToApi('issue', asset, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});


