require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift radar museum come install pave army giggle'; 
let testAccounts = [
"0xd63173b15073718bb414d83c47baad80f82c9595b2b202dab51768d2383614e0",
"0x6e0e87108acec6f3b8693e780aa5a3c88fddbf65334cfa57be6a7453a7d163b6",
"0x808a06768176501d633eaa2e5ed19f75c7e4485cf4f893cf22791d343f0263f8",
"0xbe441deb2b9e2967df80bcd2ba8a0a6298b0f05b8a5b77a026bff3ebbbc4f607",
"0xe2811ed3a417dff677b22fe1d83f4a404f37a07a6e9055fe93c79d02a72529c5",
"0x76d87d8b33cd13c492ad82abc820eb05046cf004417f24d0fbf3840ee27a9dca",
"0xb1733c4cf45208d0141cd18b41794231a9ecad372e48e4e4f5fa7fd8c61ed3af",
"0x4693c7075b150e42a30efb09d96facdd473aed9ee1789f5d784911f4b524f5ec",
"0x5e0b1501a7e065ace8b4bfb805f355962526961346cf512449c41f12fd3e7911",
"0x5987ffcc03b347b6ed5140cbd2432925f8d71131bfc7cd9c01f84f76c55b8331"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

