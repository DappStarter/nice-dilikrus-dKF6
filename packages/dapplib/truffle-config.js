require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food educate renew pizza hour install office army gift'; 
let testAccounts = [
"0x7f4fe44f13c976ff03dbe761628efbd3adadd1d624839adfc61166504b77b6e8",
"0xb7f11cb8f41324543353dd8e43c0bb904d1fef4ac714a029ddd81c691db38273",
"0x7cf4a03c467a763ccebd9e3f39dc91365bb79597f7dfd99b8c824756dafaad55",
"0xf36dee2dec8082a75891f863c4ed93ce3d5d54677330d00c61c5a324eff91e6f",
"0x6af608d26c240f369089baee1a60dae70c12f96c8dd91ddd2f874b9e310b92a1",
"0x4fe1f3f87afd17e08458ebf6a0315b7a2415450f7d5ec21b6b3e2e7ffb4355c1",
"0xfd453c5993ab8837113f6998a152fed40f24ce2480198a7c8f45e809182ffa72",
"0xb6d0b05ab109a3dd3af697948411efa23ff74ef340682fccc78a4642992862dd",
"0xa3a5b29f899929f73f0c033912d93ba8f391a92a4b9bf37a8bd58e5d622d72be",
"0x9e183ef876f7a975f9f73b099f5606919ada93f2db7a39f53a03d2dfafef64f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


