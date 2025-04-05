import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, BigNumber } from "ethers";

describe("CarbonCreditToken", function () {
  let token: Contract;
  let owner: any, addr1: any, addr2: any;

  // Prima di ogni test, deployiamo il contratto
  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const TokenFactory = await ethers.getContractFactory("CarbonCreditToken");
    token = await TokenFactory.deploy();
    await token.deployed();
  });

  // Test 1: Il saldo iniziale del proprietario deve essere uguale all'offerta iniziale
  it("dovrebbe assegnare l'offerta iniziale al proprietario", async function () {
    const ownerBalance: BigNumber = await token.balanceOf(owner.address);
    // Supponiamo che l'offerta iniziale sia di 1.000.000 token (con 18 decimali)
    const expectedSupply = ethers.utils.parseEther("1000000");
    expect(ownerBalance.eq(expectedSupply)).to.be.true;
  });

  // Test 2: Il proprietario deve poter creare (mint) token
  it("dovrebbe permettere al proprietario di creare (mint) token", async function () {
    const mintAmount: BigNumber = ethers.utils.parseEther("100"); // 100 token
    await token.mint(addr1.address, mintAmount);
    const addr1Balance: BigNumber = await token.balanceOf(addr1.address);
    expect(addr1Balance.eq(mintAmount)).to.be.true;
  });

  // Test 3: Un detentore di token deve poter bruciare (burn) i propri token
  it("dovrebbe permettere ad un detentore di token di bruciare (burn) i propri token", async function () {
    const burnAmount: BigNumber = ethers.utils.parseEther("50"); // 50 token
    const initialBalance: BigNumber = await token.balanceOf(owner.address);
    await token.burn(burnAmount);
    const finalBalance: BigNumber = await token.balanceOf(owner.address);
    expect(initialBalance.sub(finalBalance).eq(burnAmount)).to.be.true;
  });

  // Test 4: Trasferimento di token tra conti
  it("dovrebbe permettere il trasferimento di token tra conti", async function () {
    const transferAmount: BigNumber = ethers.utils.parseEther("10"); // 10 token
    await token.transfer(addr1.address, transferAmount);
    const addr1Balance: BigNumber = await token.balanceOf(addr1.address);
    expect(addr1Balance.eq(transferAmount)).to.be.true;
  });

  // Test 5: Approva e utilizza transferFrom
  it("dovrebbe permettere di approvare e utilizzare il trasferimento tramite transferFrom", async function () {
    const approveAmount: BigNumber = ethers.utils.parseEther("20"); // 20 token
    await token.approve(addr1.address, approveAmount);

    // Con addr1, trasferiamo 15 token dal proprietario ad addr2 usando transferFrom
    const transferFromAmount: BigNumber = ethers.utils.parseEther("15"); // 15 token
    await token.connect(addr1).transferFrom(owner.address, addr2.address, transferFromAmount);

    const addr2Balance: BigNumber = await token.balanceOf(addr2.address);
    expect(addr2Balance.eq(transferFromAmount)).to.be.true;

    const remainingAllowance: BigNumber = await token.allowance(owner.address, addr1.address);
    expect(remainingAllowance.eq(approveAmount.sub(transferFromAmount))).to.be.true;
  });
});
