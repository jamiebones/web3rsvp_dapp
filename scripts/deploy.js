const hre = require("hardhat");

const main = async () => {
  console.log("starting contract deployment : ")
  const rsvpContractFactory = await hre.ethers.getContractFactory("Web3RSVP");
  console.log("finishing creating contract factory : ")
  const rsvpContract = await rsvpContractFactory.deploy();
  await rsvpContract.deployed();
  console.log("Contract deployed to:", rsvpContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();


// 0xF954C7C1Efac8335852959879811661685772d19