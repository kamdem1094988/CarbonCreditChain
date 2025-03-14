import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("CarbonCreditToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log("CarbonCreditToken deployed at:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
