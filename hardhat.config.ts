import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.20", // ou la version que vous utilisez
  networks: {
    besuLocal: {
      url: "http://127.0.0.1:8545",  // URL de votre nœud Besu
      chainId: 1337,                // Assurez-vous que le chainId correspond à celui défini dans votre genesis.json
      // Vous pouvez ajouter ici une clé privée si nécessaire, par exemple :
      // accounts: ["0xVotreClePrivee1", "0xVotreClePrivee2"]
    },
    // Optionnel : configuration pour localhost (Hardhat Node par exemple)
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    }
  },
};

export default config;
