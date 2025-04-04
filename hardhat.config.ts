import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'

const config: HardhatUserConfig = {
    solidity: '0.8.20',
    networks: {
        besuLocal: {
            url: 'http://127.0.0.1:8545',
            chainId: 2018, // ou 1337, selon votre genesis
            accounts: [
                // Listez ici vos clés privées (sans le 0x initial ou avec, selon la version de Hardhat).
                // Exemple : "0xabcdef0123456789...."
                '0xaaaaaa111111222222333333444444555555666666777777888888999999aaaa',
                '0xbbbbbb111111222222333333444444555555666666777777888888999999bbbb',
            ],
        },
    },
}

export default config
