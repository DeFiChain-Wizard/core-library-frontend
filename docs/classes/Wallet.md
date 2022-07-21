[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Wallet

# Class: Wallet

The DFIWallet offers all functions to interact with the DFIWallet.

## Implements

- `DFIWallet`

## Table of contents

### Constructors

- [constructor](Wallet.md#constructor)

### Methods

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

## Methods

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

Returns the address used for this wallet. Usually starts with 'df1...'.

#### Returns

`Promise`<`string`\>

The address used for this wallet.

#### Implementation of

DFIWallet.getAddress

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current WhaleApiClient.

#### Returns

`WhaleApiClient`

The current WhaleApiClient.

___

### getCurrentVault

▸ **getCurrentVault**(): `Promise`<`LoanVaultActive`\>

Returns the current vault.

#### Returns

`Promise`<`LoanVaultActive`\>

The vault currently stored vault to be used for management.

#### Implementation of

DFIWallet.getCurrentVault

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the Network used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

___

### getNetworkAsString

▸ **getNetworkAsString**(): `Promise`<`string`\>

Returns the network used for this wallet ('mainnet', 'testnet',...) as string.

#### Returns

`Promise`<`string`\>

The network used for this wallet as string.

#### Implementation of

DFIWallet.getNetworkAsString

___

### getUTXOBalance

▸ **getUTXOBalance**(): `Promise`<`Number`\>

Returns the UTXO Balance of the wallet.

#### Returns

`Promise`<`Number`\>

The UTXO Balance of the wallet.

#### Implementation of

DFIWallet.getUTXOBalance

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

___

### getVaults

▸ **getVaults**(): `Promise`<`LoanVaultActive`[]\>

Returns all vaults that have been created in this wallet.

#### Returns

`Promise`<`LoanVaultActive`[]\>

All vaults found for this wallet.

#### Implementation of

DFIWallet.getVaults

___

### listTokens

▸ **listTokens**(): `Promise`<`AddressToken`[]\>

Returns a list of tokens stored in the wallet.

#### Returns

`Promise`<`AddressToken`[]\>

An array of tokens that are stored in the wallet.

#### Implementation of

DFIWallet.listTokens

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
