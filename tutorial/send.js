const solanaWeb3 = require("@solana/web3.js");
const fs = require("fs");

// Connect to Solana localnet (using localhost:8899 for local cluster)
const connection = new solanaWeb3.Connection("http://localhost:8899");

// Read the address from the file
const data = JSON.parse(fs.readFileSync("data.json"));
const customerPublicKey = data.customerPublic;
const merchantPublicKey = data.merchantPublic;

const keypair = solanaWeb3.Keypair.fromSecretKey(
  new Uint8Array(data.customerSecret)
);

let transaction = new solanaWeb3.Transaction().add(
  solanaWeb3.SystemProgram.transfer({
    fromPubkey: new solanaWeb3.PublicKey(customerPublicKey),
    toPubkey: new solanaWeb3.PublicKey(merchantPublicKey),
    lamports: 0.5 * solanaWeb3.LAMPORTS_PER_SOL,
  })
);

solanaWeb3
  .sendAndConfirmTransaction(connection, transaction, [keypair])
  .then((signature) => {
    console.log("Transaction sent: ", signature);
  });
