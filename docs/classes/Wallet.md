[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Wallet

# Class: Wallet

The DFIWallet offers all functions to interact with the DFIWallet.

## Implements

- `DFIWallet`

## Table of contents

### Methods

- [findLastTransactions](Wallet.md#findlasttransactions)
- [getAddress](Wallet.md#getaddress)
- [getClient](Wallet.md#getclient)
- [getCurrentVault](Wallet.md#getcurrentvault)
- [getNetwork](Wallet.md#getnetwork)
- [getNetworkAsString](Wallet.md#getnetworkasstring)
- [getUTXOBalance](Wallet.md#getutxobalance)
- [getVault](Wallet.md#getvault)
- [getVaults](Wallet.md#getvaults)
- [listTokens](Wallet.md#listtokens)
- [sendTransaction](Wallet.md#sendtransaction)
- [setCurrentVault](Wallet.md#setcurrentvault)
- [build](Wallet.md#build)
- [getAvailableAddresses](Wallet.md#getavailableaddresses)

## Methods

### findLastTransactions

▸ **findLastTransactions**(): `Promise`<`undefined` \| `TransactionMessage`\>

Finds the last transactions on the blockchain.

#### Returns

`Promise`<`undefined` \| `TransactionMessage`\>

#### Defined in

[src/wallet/wallet.ts:218](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L218)

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

Returns the address used for this wallet. Usually starts with 'df1...'.

#### Returns

`Promise`<`string`\>

The address used for this wallet.

#### Implementation of

DFIWallet.getAddress

#### Defined in

[src/wallet/wallet.ts:151](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L151)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current WhaleApiClient.

#### Returns

`WhaleApiClient`

The current WhaleApiClient.

#### Defined in

[src/wallet/wallet.ts:81](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L81)

___

### getCurrentVault

▸ **getCurrentVault**(): `Promise`<`LoanVaultActive`\>

Returns the current vault.

#### Returns

`Promise`<`LoanVaultActive`\>

The vault currently stored vault to be used for management.

#### Implementation of

DFIWallet.getCurrentVault

#### Defined in

[src/wallet/wallet.ts:176](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L176)

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the Network used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

#### Defined in

[src/wallet/wallet.ts:97](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L97)

___

### getNetworkAsString

▸ **getNetworkAsString**(): `Promise`<`string`\>

Returns the network used for this wallet ('mainnet', 'testnet',...) as string.

#### Returns

`Promise`<`string`\>

The network used for this wallet as string.

#### Implementation of

DFIWallet.getNetworkAsString

#### Defined in

[src/wallet/wallet.ts:89](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L89)

___

### getUTXOBalance

▸ **getUTXOBalance**(): `Promise`<`Number`\>

Returns the UTXO Balance of the wallet.

#### Returns

`Promise`<`Number`\>

The UTXO Balance of the wallet.

#### Implementation of

DFIWallet.getUTXOBalance

#### Defined in

[src/wallet/wallet.ts:279](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L279)

___

### getVault

▸ **getVault**(`id`): `Promise`<`LoanVaultActive`\>

Returns a certain vault used for this wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the vault to be used. |

#### Returns

`Promise`<`LoanVaultActive`\>

The vault used for this wallet.

#### Implementation of

DFIWallet.getVault

#### Defined in

[src/wallet/wallet.ts:160](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L160)

___

### getVaults

▸ **getVaults**(): `Promise`<`LoanVaultActive`[]\>

Returns all vaults that have been created in this wallet.

#### Returns

`Promise`<`LoanVaultActive`[]\>

All vaults found for this wallet.

#### Implementation of

DFIWallet.getVaults

#### Defined in

[src/wallet/wallet.ts:245](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L245)

___

### listTokens

▸ **listTokens**(): `Promise`<`AddressToken`[]\>

Returns a list of tokens stored in the wallet.

#### Returns

`Promise`<`AddressToken`[]\>

An array of tokens that are stored in the wallet.

#### Implementation of

DFIWallet.listTokens

#### Defined in

[src/wallet/wallet.ts:263](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L263)

___

### sendTransaction

▸ **sendTransaction**(`message`, `seed`, `passphrase`): `Promise`<`string`\>

Sends a custom transaction to your address, so that the backend can pick it up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`CustomMessage`](../interfaces/CustomMessage.md) | The [CustomMessage](../interfaces/CustomMessage.md) to send |
| `seed` | [`Seed`](Seed.md) | The seed object. |
| `passphrase` | `string` | The passphrase to decrypt the seed. |

#### Returns

`Promise`<`string`\>

the transcation id.

#### Implementation of

DFIWallet.sendTransaction

#### Defined in

[src/wallet/wallet.ts:200](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L200)

___

### setCurrentVault

▸ **setCurrentVault**(`id`): `void`

Stores the current vault to be managed by the wizard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the vault to be used as current vault. |

#### Returns

`void`

#### Implementation of

DFIWallet.setCurrentVault

#### Defined in

[src/wallet/wallet.ts:189](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L189)

___

### build

▸ `Static` **build**(`address`, `network?`): `Promise`<[`Wallet`](Wallet.md)\>

Builds the wallet object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The address is optional. If not set, it will try to get it from the account. |
| `network` | `string` | `"mainnet"` | The network to use - default: mainnet |

#### Returns

`Promise`<[`Wallet`](Wallet.md)\>

the wallet object

#### Defined in

[src/wallet/wallet.ts:70](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L70)

___

### getAvailableAddresses

▸ `Static` **getAvailableAddresses**(`seed`, `passphrase`, `network?`): `Promise`<`string`[]\>

Returns the list of addresses for a given account.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `seed` | [`Seed`](Seed.md) | `undefined` | The seed for the account |
| `passphrase` | `string` | `undefined` | The passphrase for the seed |
| `network` | `Network` | `MainNet` | The network to search the addresses for |

#### Returns

`Promise`<`string`[]\>

A list of addresses. Will return empty array if no addresses were found

#### Defined in

[src/wallet/wallet.ts:109](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1b67adb/src/wallet/wallet.ts#L109)
