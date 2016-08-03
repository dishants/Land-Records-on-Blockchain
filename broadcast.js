var bitcoin = require('bitcoinjs-lib');
var request = require('request');
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

var signedTxHex= '01000000016f3d72900f79843b684bc8f13593682c0f294d2704799f54ef7f3b8188e3cfe2000000006b483045022100902a8bc073db7e80818702064185999eb746491f0902560b2c5919a5e628f77c02206d09f25df5c5d56a2998e7489c484201be33c91653a1e368558aa26a6f630d5a012102582acb1d2f5c9dbbca7816d6cd50b8d2556827b7d2a882adb4917679e7bae36effffffff020000000000000000086a0643430205011098b06d30000000001976a91457f0309b1fb4e184d4fa56a18f9aee0cca05f47f88ac00000000'
;
var transaction = {
    'txHex': signedTxHex
}

postToApi('broadcast', transaction, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});