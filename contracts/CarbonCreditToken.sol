// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title CarbonCreditToken
 * @dev Un token ERC-20 che rappresenta crediti di carbonio, con una gestione avanzata degli accessi tramite AccessControl.
 */
contract CarbonCreditToken is ERC20, AccessControl {
    // Definiamo il ruolo di MINTER_ROLE usando il keccak256 della stringa "MINTER_ROLE"
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @dev Costruttore del contratto.
     * Imposta il nome e il simbolo del token, assegna 1.000.000 di token al deployer,
     * e assegna al deployer sia il ruolo di amministratore predefinito che il ruolo di minter.
     */
    constructor() ERC20("Carbon Credit Token", "CCT") {
        // Il deployer viene automaticamente assegnato al ruolo DEFAULT_ADMIN_ROLE
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        // Assegna anche il ruolo di MINTER_ROLE al deployer
        _setupRole(MINTER_ROLE, msg.sender);

        // Mint iniziale: 1.000.000 di token (considerando 18 decimali)
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /**
     * @notice Funzione per creare nuovi token.
     * @dev Solo i conti con il ruolo MINTER_ROLE possono chiamare questa funzione.
     * @param to L'indirizzo che riceverà i token creati.
     * @param amount Il numero di token da creare.
     */
    function mint(address to, uint256 amount) public {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _mint(to, amount);
    }

    /**
     * @notice Funzione per bruciare token.
     * @dev Permette a chiunque di bruciare i propri token.
     * @param amount Il numero di token da bruciare.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
