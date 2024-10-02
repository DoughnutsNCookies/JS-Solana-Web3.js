const solanaWeb3 = require("@solana/web3.js");
const fs = require("fs");

// Connect to Solana localnet (using localhost:8899 for local cluster)
const connection = new solanaWeb3.Connection("http://localhost:8899");

const data = JSON.parse(fs.readFileSync("data.json"));
const customerPublicKey = data.customerPublic;

// Airdrop 10 SOL to the customer
connection
  .requestAirdrop(
    new solanaWeb3.PublicKey(customerPublicKey),
    10 * solanaWeb3.LAMPORTS_PER_SOL
  )
  .then((res) => {
    console.log("Airdrop requested: ", res);
  });
