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
- [getCurrentVault](Wallet.md#getcurrentvault)
- [getNetwork](Wallet.md#getnetwork)
- [getVault](Wallet.md#getvault)
- [getVaults](Wallet.md#getvaults)
- [setCurrentVault](Wallet.md#setcurrentvault)

## Constructors

### constructor

• **new Wallet**(`address`, `network?`)

You need provide the DFI address to instantiate a new wallet.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The DFI address for the wallet. |
| `network` | ``"mainnet"`` \| ``"testnet"`` \| ``"regtest"`` | `MainNet.name` | - |

#### Defined in

[wallet/wallet.ts:35](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L35)

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

[wallet/wallet.ts:58](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L58)

___

### getCurrentVault

▸ **getCurrentVault**(): `Promise`<[`Vault`](Vault.md)\>

Returns the current vault.

#### Returns

`Promise`<[`Vault`](Vault.md)\>

The vault currently stored vault to be used for management.

#### Implementation of

DFIWallet.getCurrentVault

#### Defined in

[wallet/wallet.ts:81](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L81)

___

### getNetwork

▸ **getNetwork**(): `string`

Returns the network used for this wallet ('mainnet', 'testnet',...)

#### Returns

`string`

The network used for this wallet.

#### Implementation of

DFIWallet.getNetwork

#### Defined in

[wallet/wallet.ts:50](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L50)

___

### getVault

▸ **getVault**(`id`): `Promise`<[`Vault`](Vault.md)\>

Returns a certain vault used for this wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the vault to be used. |

#### Returns

`Promise`<[`Vault`](Vault.md)\>

The vault used for this wallet.

#### Implementation of

DFIWallet.getVault

#### Defined in

[wallet/wallet.ts:67](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L67)

___

### getVaults

▸ **getVaults**(): `Promise`<[`Vault`](Vault.md)[]\>

Returns all vaults that have been created in this wallet.

#### Returns

`Promise`<[`Vault`](Vault.md)[]\>

All vaults found for this wallet.

#### Implementation of

DFIWallet.getVaults

#### Defined in

[wallet/wallet.ts:112](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L112)

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

[wallet/wallet.ts:94](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/wallet.ts#L94)
