const solanaWeb3 = require("@solana/web3.js");
const fs = require("fs");

// Connect to Solana localnet (using localhost:8899 for local cluster)
const connection = new solanaWeb3.Connection("http://localhost:8899");

// Read the address from the file
const data = JSON.parse(fs.readFileSync("data.json"));
const customerPublicKey = data.customerPublic;
const merchantPublicKey = data.merchantPublic;

// Get the balance of the public key
connection
  .getBalance(new solanaWeb3.PublicKey(customerPublicKey))
  .then((balance) => {
    console.log("\nCustomer Address: ", customerPublicKey);
    console.log(
      "Customer Balance: ",
      balance / solanaWeb3.LAMPORTS_PER_SOL,
      "SOL"
    );
  })
  .catch((err) => {
    console.error("Error fetching balance: ", err);
  });

connection
  .getBalance(new solanaWeb3.PublicKey(merchantPublicKey))
  .then((balance) => {
    console.log("\nMerchant Address: ", merchantPublicKey);
    console.log(
      "Merchant Balance: ",
      balance / solanaWeb3.LAMPORTS_PER_SOL,
      "SOL"
    );
  })
  .catch((err) => {
    console.error("Error fetching balance: ", err);
  });
