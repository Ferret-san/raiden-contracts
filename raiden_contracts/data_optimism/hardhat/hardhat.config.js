require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('@eth-optimism/hardhat-ovm')
require('hardhat-deploy')

module.exports = {
  networks: {
    optimism: {
        url: 'https://kovan.optimism.io',
        accounts: [''], //USE A .ENV FILE OUR SUFFER THE CONSEQUENCES 
        // This sets the gas price to 0 for all transactions on L2. We do this
        // because account balances are not automatically initiated with an ETH
        // balance (yet, sorry!).
        gasPrice: 0,
        gasLimit: 9999999,
        chainId: 69,
        ovm: true // This sets the network as using the ovm and ensure contract will be compiled against that.
      }
  },
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  ovm: {
    solcVersion: '0.7.6'
  },
  paths: {
    sources: "./data",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  namedAccounts: {
    deployer: '0xFb8C3ba8A46014400487f2fB4d539A5Ff7bC367D'
  },
}