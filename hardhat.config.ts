import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat",
  networks: {
    mainnet: {
      url: process.env.ALCHEMY_HTTP_URL_MAINNET,
      accounts: {
        mnemonic: process.env.RINKEBY_MNEMONIC
      }
    },
    rinkeby: {
      url: process.env.ALCHEMY_HTTP_URL_RINKEBY,
      // accounts: [process.env.PRIVATE_KEY_ACC2]
      accounts: {
        mnemonic: process.env.RINKEBY_MNEMONIC
      }
    },
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_HTTP_URL_MAINNET
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};