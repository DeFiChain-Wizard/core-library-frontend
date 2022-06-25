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

#### Defined in

[src/wallet/wallet.ts:51](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L51)

## Methods

### getAddress

▸ **getAddress**(): `string`

Returns the address used for this wallet. Usually starts with 'df1...'.

#### Returns

`string`

The address used for this wallet.

#### Implementation of

DFIWallet.getAddress

#### Defined in

[src/wallet/wallet.ts:90](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L90)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current {@link WhaleApiClient}.

#### Returns

`WhaleApiClient`

The current {@link WhaleApiClient}.

#### Defined in

[src/wallet/wallet.ts:66](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L66)

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

[src/wallet/wallet.ts:113](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L113)

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the {@link Network} used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

#### Defined in

[src/wallet/wallet.ts:82](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L82)

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

[src/wallet/wallet.ts:74](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L74)

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

[src/wallet/wallet.ts:201](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L201)

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

[src/wallet/wallet.ts:99](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L99)

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

[src/wallet/wallet.ts:170](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L170)

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

[src/wallet/wallet.ts:188](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L188)

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

[src/wallet/wallet.ts:137](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L137)

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

[src/wallet/wallet.ts:126](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/cb78abc/src/wallet/wallet.ts#L126)
