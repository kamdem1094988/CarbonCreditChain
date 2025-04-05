import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
const config: HardhatUserConfig = {
    solidity: '0.8.20',
    networks: {
        besuLocal: {
            url: 'http://127.0.0.1:8545',
            chainId: 2018, //  chainId utilizzato dentro il genesis
            accounts: [
                // chiave prita del nuovo  wallet (la stringa deve iniziare per  "0x")
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
        timeout: 20000, // 20 secondi per i tests asynchroni
    },
}

export default config
