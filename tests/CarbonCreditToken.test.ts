import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("CarbonCreditToken", function () {
  let token: Contract;
  let deployer: any;
  let addr1: any;

  beforeEach(async function () {
    [deployer, addr1] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("CarbonCreditToken");
    token = await Token.deploy();
    await token.deployed();
  });

  it("should assign initial tokens to the deployer", async function () {
    const balance = await token.balanceOf(deployer.address);
    // On attend 1,000,000 tokens avec 18 décimales
    expect(balance).to.equal(ethers.utils.parseEther("1000000"));
  });

  it("should allow owner to mint new tokens", async function () {
    await token.mint(addr1.address, ethers.utils.parseEther("100"));
    const balance = await token.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("100"));
  });

  it("should allow token holder to burn tokens", async function () {
    // Par exemple, brûler 50 tokens du déployeur
    await token.burn(ethers.utils.parseEther("50"));
    const balance = await token.balanceOf(deployer.address);
    expect(balance).to.equal(ethers.utils.parseEther("999950"));
  });
});
