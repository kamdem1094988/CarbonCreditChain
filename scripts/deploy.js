import { ethers } from "hardhat";

async function main() {
  // Récupérer le(s) compte(s) signataire(s)
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Afficher le solde du compte deployer
  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  // Récupérer l'usine à contrat pour CarbonCreditToken
  const CarbonCreditToken = await ethers.getContractFactory("CarbonCreditToken");

  // Déployer le contrat
  const token = await CarbonCreditToken.deploy();
  await token.deployed();
  console.log("CarbonCreditToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
