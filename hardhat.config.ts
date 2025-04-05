import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
const config: HardhatUserConfig = {
    solidity: '0.8.20',
    networks: {
        besuLocal: {
            url: 'http://127.0.0.1:8545',
            chainId: 2018, // ou le chainId utilisé dans votre genesis
            accounts: [
                // Remplacez par la clé privée du nouveau wallet (la chaîne doit commencer par "0x")
                '0x484a1f39b1310cfea03068c5d2f3d485e7c8f5149f93dd9cf122c8ab7f5f73c3',
            ],
        },
        localhost: {
            url: 'http://127.0.0.1:8545',
            chainId: 2018,
            accounts: [
                '0x484a1f39b1310cfea03068c5d2f3d485e7c8f5149f93dd9cf122c8ab7f5f73c3',
            ],
        },
    },
    mocha: {
        timeout: 20000, // 20 secondes pour les tests asynchrones
    },
}

export default config
