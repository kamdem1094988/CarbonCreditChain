
# Corso di software security AA.2024/2025

# CarbonCreditChain

Questo progetto ha l'obiettivo di sviluppare e implementare una soluzione per la gestione dei crediti di carbonio tramite smart contract su una blockchain privata. Abbiamo realizzato un token ERC-20 denominato **CarbonCreditToken**, integrando la soluzione con Hyperledger Besu per simulare un ambiente blockchain di test.

## Obiettivi e Lavori Svolti

- **Sviluppo dello Smart Contract**  
  - Implementazione di un token ERC-20 per i crediti di carbonio.
  - Aggiunta di funzioni per il minting e il burning dei token.
  - Gestione dei ruoli tramite OpenZeppelin AccessControl per garantire la sicurezza delle operazioni (ad es. `grantRole`, `revokeRole`).

- **Test e Validazione**  
  - Creazione di test unitari con Hardhat per verificare il comportamento del contratto.
  - Deploy e interazione manuale con il contratto tramite Remix, utilizzando l’ambiente JavaScript VM (London) per test locali.
  - Verifica della corretta allocazione dei fondi e della gestione dei ruoli.

- **Integrazione con Besu**  
  - Configurazione di un nodo Besu in locale (tramite Docker) utilizzando un file `genesis.json` personalizzato.
  - Avvio e sincronizzazione del nodo su una rete privata (consenso IBFT o Clique, a seconda della configurazione).
  - Utilizzo di Besu per simulare un ambiente blockchain realistico e per il deploy dei contratti.

## Requisiti

- **Node.js** e **npm**
- **Hardhat** per compilare e testare gli smart contract
- **Remix IDE** per deploy e test manuali
- **Docker** per eseguire un nodo Besu in locale

## Installazione

1. Clonare il repository:
   ```bash
   git clone <URL_DEL_REPOSITORY>
   cd CarbonCreditChain
