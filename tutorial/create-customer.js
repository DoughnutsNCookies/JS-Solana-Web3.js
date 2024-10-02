const solanaWeb3 = require("@solana/web3.js");
const fs = require("fs");

// Create a new customer wallet
let keypair = solanaWeb3.Keypair.generate();
console.log("New customer Address: ", keypair.publicKey.toBase58());

// Write address to a file, create if it doesn't exist
const filePath = "data.json";
let data = {};

try {
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }
} catch (err) {
  console.error("Error reading file, creating new file instead");
}

data.customerPublic = keypair.publicKey.toBase58();
data.customerSecret = Array.from(keypair.secretKey);

try {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("Address written to file successfully.");
} catch (err) {
  console.error("Error writing file:", err);
}
