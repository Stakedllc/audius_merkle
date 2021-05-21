const HDWalletProvider = require("truffle-hdwallet-provider");
const MAIN_INFURA = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

module.exports = {
  networks: {
    mainFork: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 9000000,
      gasPrice: 10e9 // 10 Gwei
    },
    main: {
        provider: () =>
          new HDWalletProvider(process.env.PRIVATE_KEY, MAIN_INFURA),
        network_id: "1",
        gas: 9978302,
        gasPrice: 110e9 // 110 GWei
    },
  },
  compilers: {
    solc: {
      version: "0.6.11",
    },
  },
  solc: {
    optimizer: {
      enabled: false,
      runs: 0
    }
  },
  contracts_directory: "./contracts"
};
