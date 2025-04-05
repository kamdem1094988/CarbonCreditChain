
# Corso di software security AA.2024/2025
# CarbonCreditChain

Questo progetto ha l'obiettivo di sviluppare una soluzione per la gestione dei crediti di carbonio tramite smart contract su una blockchain privata. Abbiamo implementato un token ERC-20, denominato **CarbonCreditToken**, utilizzando le librerie di OpenZeppelin e testato il suo funzionamento con Hardhat. Inoltre, il progetto è integrato con Hyperledger Besu, eseguito in locale tramite Docker, per simulare un ambiente blockchain realistico.

## Obiettivi del Progetto

- **Sviluppo dello Smart Contract**
  - Implementazione di un token ERC-20 che rappresenta i crediti di carbonio.
  - Funzioni principali: mint, burn, transfer, approve, transferFrom.
  - Gestione dei ruoli (es. MINTER_ROLE) tramite OpenZeppelin AccessControl per garantire la sicurezza e il controllo delle operazioni.

- **Test e Validazione**
  - Utilizzo di Hardhat per scrivere ed eseguire test unitari che verificano il corretto funzionamento delle funzioni del contratto.
  - Verifica anche dei casi di errore (ad esempio, tentativi di mint da parte di account non autorizzati o trasferimenti con saldo insufficiente).
  - Analisi degli eventi emessi (es. l’evento Transfer) per monitorare le operazioni.

- **Integrazione con Besu**
  - Configurazione di un nodo Besu locale eseguito tramite Docker.
  - Utilizzo di un file `genesis.json` personalizzato per inizializzare la blockchain (con allocazione di fondi e impostazione del chainId).
  - Possibilità di interagire con il nodo tramite Hardhat, Remix o altri strumenti.

## Requisiti

- **Node.js** e **npm**
- **Hardhat** per compilare e testare gli smart contract
- **Docker** per eseguire il nodo Besu in locale
- **Remix IDE** (opzionale) per il deploy e test manuali

## Installazione

1. Clonare il repository:
   ```bash
   git clone <https://github.com/kamdem1094988/CarbonCreditChain.git>
   cd CarbonCreditChain
