import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";

describe("CarbonCreditToken", function () {
  let token: Contract;
  let deployer: any, addr1: any, addr2: any;

  // Avant chaque test, on déploie une nouvelle instance du contrat
  beforeEach(async function () {
    [deployer, addr1, addr2] = await ethers.getSigners();
    const TokenFactory = await ethers.getContractFactory("CarbonCreditToken");
    token = await TokenFactory.deploy();
    await token.deployed();
  });

  it("should assign the initial supply to the deployer", async function () {
    // Vérifie que le déployeur reçoit 1 000 000 tokens (en tenant compte de 18 décimales)
    const deployerBalance = await token.balanceOf(deployer.address);
    expect(deployerBalance).to.equal(ethers.utils.parseEther("1000000"));
  });

  it("should allow the owner to mint tokens", async function () {
    // Le propriétaire (deployer) crée 100 tokens pour addr1
    await token.mint(addr1.address, ethers.utils.parseEther("100"));
    const addr1Balance = await token.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.utils.parseEther("100"));
  });

  it("should allow a token holder to burn tokens", async function () {
    // Le déployeur brûle 50 tokens de son solde
    await token.burn(ethers.utils.parseEther("50"));
    const deployerBalance = await token.balanceOf(deployer.address);
    // Le solde attendu = 1 000 000 - 50 = 999950 tokens
    expect(deployerBalance).to.equal(ethers.utils.parseEther("999950"));
  });

  it("should revert when non-owner tries to mint tokens", async function () {
    // addr1 tente de mint, mais seul l'owner est autorisé à mint
    await expect(
      token.connect(addr1).mint(addr1.address, ethers.utils.parseEther("100"))
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
