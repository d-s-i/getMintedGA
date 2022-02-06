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
  defaultNetwork: "mainnet",
  networks: {
    mainnet: {
      url: process.env.ALCHEMY_KEY,
    }
  }
};