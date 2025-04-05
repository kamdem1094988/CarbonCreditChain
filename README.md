
# Corso di software security AA.2024/2025
# CarbonCreditChain

Questo progetto ha l'obiettivo di sviluppare una soluzione per la gestione dei crediti di carbonio tramite smart contract su una blockchain privata. Abbiamo implementato un token ERC-20, denominato **CarbonCreditToken**, utilizzando le librerie di OpenZeppelin e testato il suo funzionamento con Hardhat. Inoltre, il progetto è integrato con Hyperledger Besu, eseguito in locale tramite Docker, per simulare un ambiente blockchain realistico.

## Obiettivi del Progetto
## Descrizione del Diagramma ISTAR
Il diagramma ISTAR illustra le interazioni e le dipendenze tra i principali attori e il sistema di gestione dei crediti di carbonio. In questo diagramma:

Attori:

Amministratore/Proprietario: Richiede funzionalità sicure per la creazione (mint) e la distruzione (burn) dei token.

Azienda: Esige affidabilità e tracciabilità delle transazioni.

Auditor: Necessita di accesso ai log e report per condurre audit di sicurezza.

Acquirente/Investitore: Richiede un marketplace trasparente e sicuro per il trading dei crediti.

Sistema:
Il sistema di gestione dei CarbonCreditToken fornisce tutte le funzionalità necessarie per rispondere alle richieste degli attori, garantendo sicurezza, controllo e trasparenza nelle operazioni.

Il diagramma evidenzia come ogni attore "richiede" specifiche funzioni, che il sistema "fornisce" per soddisfare tali esigenze, assicurando così una gestione integrata e sicura dei crediti di carbonio.
![image](https://github.com/user-attachments/assets/44691e1f-a928-4c80-ab32-40fad6954c30)

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
