@defichainwizard/core / [Exports](modules.md)

# DeFiChain Wizard Core Library

This library can be used to access and retrieve certain wallet data that should be available from within the UI.

It can also send a custom transaction to the DeFiChain.

# Installation

```
npm i @defichainwizard/core
```

# What can be done with this library

- Store and read the seed phrase (encrypted)
- Store and read the wallet address
- Store and read the vault address
- Store and read the Blockhain configuration
- Send a custom transaction to the DeFiChain Blockchain
- Read basic Blockchain-Data
- Read data from your wallet (e.g. tokens, ratio,...)

# Basic Usage

You can import the classes to use like this:

```ts
import { Wallet, Seed } from "@defichainwizard/core";
```

## Create the wallet and get some data

```ts
const wallet = await Wallet.build(myDFIAddress)

// returns the current UTXO balance
const balance = await wallet.getUTXOBalance();

// returns all active vaults
const vaults = await wallet.getVaults();

// returns a specific vault
const someVault = await wallet.getVault(myVaultId);

// get all tokens (incl. liquidity mining) from the wallet
const tokens = await wallet.listTokens();

// specify a certain vault to be used
await wallet.setCurrentVault(someVaultId);

// returns the current vault to be used
const vault = await wallet.getCurrentVault();
```

## Get some data from the vault

The vault return data is aligned with the Jellyfish API response, so you can grab the data the same way.

See: https://jellyfish.defichain.com/ocean/address#response-3

```ts
// returns a specific vault
const someVault = await wallet.getVault(myVaultId);

// get the minimum collateral ratio (e.g. 150)
const minimumCollateralRatio = someVault.loanScheme.minColRatio;

// get the current collateral ratio (e.g. 167)
const collateralRatio = someVault.collateralRatio;
```

## Create the seed

The seed is **only** needed when you want to send a transaction. It will be encrypted and stored. In the browser NPM version, it will be stored in the local storage.

This API only support addresses from the light wallet, which means that you will have to provide the 24 words.

```ts
const mySeed = new Seed(mySeed, myPassword);

/**
 * do some other stuff and don't call any getter of the seed right after the instantiation as the encryption takes 1-3 seconds (depending on the device).
 */

// now we need the seed for some reason:

// returns the 24 word array as provided
const seedArray = await mySeed.asArray(myPassword);

// returns the seed as comma-separated string.
const seedString = await mySeed.asString(myPassword);

// no password for decryption needed
const seedEncrypted = await mySeed.asEncrypted();
```

## Send a custom transaction

Now that we have the wallet and the seed in place, let's send a custom transaction.

```ts
// sends a custom transaction with a custom message
const transactionId = await wallet.sendTransaction(
  "My custom message",
  seedEncrypted,
  myPassword
);
```

If you want to see the custom (RAW) transaction just use the following page and enter either the returned transaction ID or search for your wallet address:

https://chainz.cryptoid.info/dfi/
