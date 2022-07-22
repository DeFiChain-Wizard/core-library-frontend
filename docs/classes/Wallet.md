[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Wallet

# Class: Wallet

The DFIWallet offers all functions to interact with the DFIWallet.

## Implements

- `DFIWallet`

## Table of contents

### Constructors

- [constructor](Wallet.md#constructor)

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

## Constructors

### constructor

• **new Wallet**(`address`, `network?`)

The DFI Wallet Address and the network is needed to instantiate the wallet.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | the DFI wallet address |
| `network` | `string` | `"mainnet"` | the network as string (e.g. mainnet, testnet) |

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:53](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L53)

## Methods

### findLastTransactions

▸ **findLastTransactions**(): `Promise`<`undefined` \| `TransactionMessage`\>

Finds the last transactions on the blockchain.

#### Returns

`Promise`<`undefined` \| `TransactionMessage`\>

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:157](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L157)

___

### getAddress

▸ **getAddress**(): `string`

Returns the address used for this wallet. Usually starts with 'df1...'.

#### Returns

`string`

The address used for this wallet.

#### Implementation of

DFIWallet.getAddress

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:92](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L92)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current WhaleApiClient.

#### Returns

`WhaleApiClient`

The current WhaleApiClient.

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:68](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L68)

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

[core-library-frontend/src/wallet/wallet.ts:115](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L115)

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the Network used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:84](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L84)

___

### getNetworkAsString

▸ **getNetworkAsString**(): `string`

Returns the network used for this wallet ('mainnet', 'testnet',...) as string.

#### Returns

`string`

The network used for this wallet as string.

#### Implementation of

DFIWallet.getNetworkAsString

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:76](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L76)

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

[core-library-frontend/src/wallet/wallet.ts:215](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L215)

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

[core-library-frontend/src/wallet/wallet.ts:101](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L101)

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

[core-library-frontend/src/wallet/wallet.ts:184](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L184)

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

[core-library-frontend/src/wallet/wallet.ts:202](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L202)

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

[core-library-frontend/src/wallet/wallet.ts:139](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L139)

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

[core-library-frontend/src/wallet/wallet.ts:128](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/1becf0e/src/wallet/wallet.ts#L128)
