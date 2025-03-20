import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";


const config: HardhatUserConfig = {
  solidity: {
    // Au lieu de "version: '0.8.x'", on utilise "compilers"
    compilers: [
      { version: "0.8.20" }, // couvre ^0.8.20
      { version: "0.8.19" }, // couvre ^0.8.19
      { version: "0.8.4" },  // couvre ^0.8.4
      { version: "0.8.2" },  // etc.
      { version: "0.8.0" }
    ],
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;
