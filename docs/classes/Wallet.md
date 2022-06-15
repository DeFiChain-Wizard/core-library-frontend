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

You need provide the DFI address to instantiate a new wallet.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The DFI address for the wallet. |
| `network` | `string` | `"mainnet"` | - |

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:49](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L49)

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

[core-library-frontend/src/wallet/wallet.ts:80](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L80)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

#### Returns

`WhaleApiClient`

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:61](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L61)

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

[core-library-frontend/src/wallet/wallet.ts:103](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L103)

___

### getNetwork

▸ **getNetwork**(): `Network`

#### Returns

`Network`

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:72](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L72)

___

### getNetworkAsString

▸ **getNetworkAsString**(): `string`

Returns the network used for this wallet ('mainnet', 'testnet',...)

#### Returns

`string`

The network used for this wallet.

#### Implementation of

DFIWallet.getNetworkAsString

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:68](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L68)

___

### getUTXOBalance

▸ **getUTXOBalance**(): `Promise`<`Number`\>

#### Returns

`Promise`<`Number`\>

#### Implementation of

DFIWallet.getUTXOBalance

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:181](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L181)

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

[core-library-frontend/src/wallet/wallet.ts:89](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L89)

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

[core-library-frontend/src/wallet/wallet.ts:159](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L159)

___

### listTokens

▸ **listTokens**(): `Promise`<`AddressToken`[]\>

#### Returns

`Promise`<`AddressToken`[]\>

#### Implementation of

DFIWallet.listTokens

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:172](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L172)

___

### sendTransaction

▸ **sendTransaction**(`message`, `seed`, `passphrase`): `Promise`<`string`\>

Sends a custom transaction to your address, so that the backend can pick it up.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`CustomMessage`](../interfaces/CustomMessage.md) |
| `seed` | [`Seed`](Seed.md) |
| `passphrase` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

DFIWallet.sendTransaction

#### Defined in

[core-library-frontend/src/wallet/wallet.ts:124](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L124)

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

[core-library-frontend/src/wallet/wallet.ts:116](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/2c7103a/src/wallet/wallet.ts#L116)
