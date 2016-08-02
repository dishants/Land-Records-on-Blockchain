var bitcoin = require('bitcoinjs-lib')
//var key = bitcoin.ECPair.makeRandom({network: bitcoin.networks.testnet});
var key = bitcoin.ECKey.makeRandom();
//var address = key.getAddress().toString();
var address = key.pub.getAddress(bitcoin.networks.testnet).toString();
var wif = key.toWIF();
console.log('new TESTNET address: ['+address+']');
console.log('Private Key of new address (WIF format): ['+wif+']');

//
//address
//moXvpRmNQXkfpggXmQGvE3gbp3QyM9cpdq

//priv
//Private
//L3fUpJPYjCAdNUiYy7auBXfcWGG5pJ8EqqNdxxdxVsGpS4PBjuWZ
