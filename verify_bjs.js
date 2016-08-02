var bitcoin = require('bitcoinjs-lib');
key = bitcoin.ECKey.makeRandom();
address = key.pub.getAddress().toString();
console.log('new bitcoin address: ['+address+']');