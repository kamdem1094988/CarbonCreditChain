// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Force recompile

/**
 * @title CarbonCreditToken
 * @dev Un token ERC-20 représentant des crédits carbone échangeables.
 */
contract CarbonCreditToken is ERC20, Ownable {
    /**
     * @dev Constructeur du contrat.
     * Définit le nom et le symbole du token, et attribue 1 000 000 crédits initiaux.
     */
    constructor() ERC20("Carbon Credit Token", "CCT") Ownable() {
        // Dans les versions récentes d'OpenZeppelin, Ownable() ne prend pas d'argument.
        // L'owner par défaut est l'adresse qui déploie le contrat (msg.sender).
        
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /**
     * @notice Permet à l'owner de créer de nouveaux crédits carbone.
     * @dev Seul l'owner peut appeler cette fonction.
     * @param to L'adresse qui recevra les crédits carbone créés.
     * @param amount Le nombre de crédits carbone à générer.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @notice Permet à un utilisateur de brûler ses propres crédits carbone.
     * @dev Supprime définitivement des crédits de l'offre totale.
     * @param amount Le nombre de crédits carbone à détruire.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
