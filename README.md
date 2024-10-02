# JS-Solana-Web3.js

Web3.js tutorial for Solana.

This tutorial demonstrates how to create Solana wallets and sending transactions using the Web3.js library.

## Prerequisites

Ensure Node.js, npm, and Solana CLI are installed

Ensure you're in the `tutorial` directory

Install the dependencies:

```bash
npm install
```

For this tutorial, we will be using Solana Localnet. To start a localnet, run the following command:

```bash
solana-test-validator
```

Ensure that the Solana CLI is configured to use the localnet:

```bash
solana config set --url http://localhost:8899
```

## Creating the wallets

Create a wallet for the customer (sender):

```bash
npm run customer
```

Create a wallet for the receiver (merchant):

```bash
npm run merchant
```

The wallet addresses will be displayed in the console. It will also be saved in the `data.json` file.

## AirDrop tokens

To send tokens to the customer and merchant wallets, the customer needs to have some tokens first.

AirDrop tokens to the customer wallet by running:

```bash
npm run airdrop
```

You can check the balance of the customer wallet by running:

```bash
npm run balance
```

Do note that AirDropping tokens will take some time to reflect in the wallet.

## Sending tokens

To send tokens from the customer wallet to the merchant wallet, run:

```bash
npm run send
```

You can check the balance of both the customer and merchant wallet by running:

```bash
npm run balance
```
