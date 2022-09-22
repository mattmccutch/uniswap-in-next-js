require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: 'https://eth-goerli.g.alchemy.com/v2/xsNvU3q6sKF6Zl5RheTlqkR6YhaQmPNl',
      accounts: [
        'a7b73329bccc52a2e0577c65fececf8b46a200040704143f7b98f178ce2bf00a'
      ],
    },
  },
};
