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

## Methods

### findLastTransactions

▸ **findLastTransactions**(): `Promise`<`undefined` \| `TransactionMessage`\>

Finds the last transactions on the blockchain.

#### Returns

`Promise`<`undefined` \| `TransactionMessage`\>

#### Defined in

[src/wallet/wallet.ts:164](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L164)

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

[src/wallet/wallet.ts:97](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L97)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current WhaleApiClient.

#### Returns

`WhaleApiClient`

The current WhaleApiClient.

#### Defined in

[src/wallet/wallet.ts:73](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L73)

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

[src/wallet/wallet.ts:122](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L122)

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the Network used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

#### Defined in

[src/wallet/wallet.ts:89](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L89)

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

[src/wallet/wallet.ts:81](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L81)

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

[src/wallet/wallet.ts:225](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L225)

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

[src/wallet/wallet.ts:106](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L106)

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

[src/wallet/wallet.ts:191](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L191)

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

[src/wallet/wallet.ts:209](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L209)

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

[src/wallet/wallet.ts:146](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L146)

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

[src/wallet/wallet.ts:135](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L135)

___

### build

▸ `Static` **build**(`address`, `network?`): `Promise`<[`Wallet`](Wallet.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `network` | `string` | `"mainnet"` |

#### Returns

`Promise`<[`Wallet`](Wallet.md)\>

#### Defined in

[src/wallet/wallet.ts:62](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/4da6672/src/wallet/wallet.ts#L62)
