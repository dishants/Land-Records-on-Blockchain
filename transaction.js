var bitcoin = require('bitcoinjs-lib');
var request = require('request');

funded_address = 'moXvpRmNQXkfpggXmQGvE3gbp3QyM9cpdq'
// e.g. funded_ad'n2t19a46cBs2DdHs2sqfRwPGhoQjvqmefR';


function postToApi(api_endpoint, json_data, callback) {
    request.post({
        url: 'http://testnet.api.coloredcoins.org:80/v3/'+api_endpoint,
        headers: {'Content-Type': 'application/json'},
        form: asset
    }, 
    function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body)
        }

        var txHex=body.txHex
        var assetid=body.assetId
        console.log("AssetID");
        console.log(assetid);
        console.log("AssetEND")
        var signedTxHex = signTx(txHex, key);
        var transaction = {'txHex': signedTxHex}

        broadcastpush('broadcast', transaction, function(err, body){
    if (err) {
        
        console.log('error: ', err);
             }
});


    

        return callback(null, body);
    });
};

var key = 'L3fUpJPYjCAdNUiYy7auBXfcWGG5pJ8EqqNdxxdxVsGpS4PBjuWZ'



function broadcastpush(api_endpoint, json_data, callback) {
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

        var inter = JSON.stringify(body.txid)
        console.log(inter.txid)

        console.log('Status: ', response.statusCode);
        console.log('Body: ', JSON.stringify(body.txid));
        return callback(null, body);
    });
};


function signTx (unsignedTx, wif) {
    var privateKey = bitcoin.ECKey.fromWIF(wif)
    var tx = bitcoin.Transaction.fromHex(unsignedTx)
    var insLength = tx.ins.length
    console.log(insLength)
    for (var i = 0; i < insLength; i++) {
        tx.sign(i, privateKey)
    }
    return tx.toHex()
}

var arr = process.argv[2].toString().split(":");


var asset = {

    issueAddress: funded_address,
    from: [funded_address],
    amount:1,
    fee: 5000,    
    metadata:  { assetName: 'laboris',
      issuer: 'anim nisi consectetur',
      description: 'Fugiat ipsum sunt amet reprehenderit irure.',
      userData: 
       { meta: 
          [ { key: 'Hash', value: arr[0], type: 'String' },
            { key: 'Rectangle', value: arr[1], type: 'String' },
            { key: 'Pseudoowner', value: arr[2], type: 'String' } ]} }
};


var a=postToApi('issue', asset, function(err, body){
    if (err) {
       console.log('error: ', err);
    }
});



