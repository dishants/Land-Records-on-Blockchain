var bitcoin = require('bitcoinjs-lib');

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

var key = 'L3fUpJPYjCAdNUiYy7auBXfcWGG5pJ8EqqNdxxdxVsGpS4PBjuWZ'
// e.g. var key = 'KzH9zdXm95Xv3z7oNxzM6HqSPUiQbuyKoFdQBTf3HKx1B6eYdbAn';
var txHex = process.argv[2];
// e.g. txHex = '0100000001e0cd69ce93aded7a8d51063ed5f7bb5c9cdcc885a93fa629574dedb2cd5b48ad0100000000ffffffff020000000000000000086a06434301050110b8820100000000001976a914ea55c2430dca31e56ef5ae55c2863dae65df908688ac00000000'

var signedTxHex = signTx(txHex, key);
console.log("signedTxHex: ["+signedTxHex+"]");
