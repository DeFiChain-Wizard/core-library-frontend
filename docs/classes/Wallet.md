[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Wallet

# Class: Wallet

The DFIWallet offers all functions to interact with the DFIWallet.

## Table of contents

### Methods

- [findLastWizardConfiguration](Wallet.md#findlastwizardconfiguration)
- [getAddress](Wallet.md#getaddress)
- [getClient](Wallet.md#getclient)
- [getCurrentVault](Wallet.md#getcurrentvault)
- [getLatestConfig](Wallet.md#getlatestconfig)
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

### findLastWizardConfiguration

▸ **findLastWizardConfiguration**(`seed`): `Promise`<`undefined` \| [`CustomMessage`](../interfaces/CustomMessage.md)\>

Finds the last Wizard configuration on the block chain and returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `string`[] | The seed that was used for the encryption of the Custom Message |

#### Returns

`Promise`<`undefined` \| [`CustomMessage`](../interfaces/CustomMessage.md)\>

the custom message if one was found. It will return undefined if no Custom Message was found.

#### Defined in

[src/wallet/wallet.ts:203](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L203)

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

Returns the address used for this wallet. Usually starts with 'df1...'.

#### Returns

`Promise`<`string`\>

The address used for this wallet.

#### Defined in

[src/wallet/wallet.ts:133](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L133)

___

### getClient

▸ **getClient**(): `WhaleApiClient`

Returns the current WhaleApiClient.

#### Returns

`WhaleApiClient`

The current WhaleApiClient.

#### Defined in

[src/wallet/wallet.ts:63](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L63)

___

### getCurrentVault

▸ **getCurrentVault**(): `Promise`<`LoanVaultActive`\>

Returns the current vault.

#### Returns

`Promise`<`LoanVaultActive`\>

The vault currently stored vault to be used for management.

#### Defined in

[src/wallet/wallet.ts:158](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L158)

___

### getLatestConfig

▸ **getLatestConfig**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/wallet/wallet.ts:285](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L285)

___

### getNetwork

▸ **getNetwork**(): `Network`

Returns the Network used for this wallet ('mainnet', 'testnet',...).

#### Returns

`Network`

The network used for this wallet.

#### Defined in

[src/wallet/wallet.ts:79](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L79)

___

### getNetworkAsString

▸ **getNetworkAsString**(): `Promise`<`string`\>

Returns the network used for this wallet ('mainnet', 'testnet',...) as string.

#### Returns

`Promise`<`string`\>

The network used for this wallet as string.

#### Defined in

[src/wallet/wallet.ts:71](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L71)

___

### getUTXOBalance

▸ **getUTXOBalance**(): `Promise`<`Number`\>

Returns the UTXO Balance of the wallet.

#### Returns

`Promise`<`Number`\>

The UTXO Balance of the wallet.

#### Defined in

[src/wallet/wallet.ts:278](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L278)

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

#### Defined in

[src/wallet/wallet.ts:142](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L142)

___

### getVaults

▸ **getVaults**(): `Promise`<`LoanVaultActive`[]\>

Returns all vaults that have been created in this wallet.

#### Returns

`Promise`<`LoanVaultActive`[]\>

All vaults found for this wallet.

#### Defined in

[src/wallet/wallet.ts:244](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L244)

___

### listTokens

▸ **listTokens**(): `Promise`<`AddressToken`[]\>

Returns a list of tokens stored in the wallet.

#### Returns

`Promise`<`AddressToken`[]\>

An array of tokens that are stored in the wallet.

#### Defined in

[src/wallet/wallet.ts:262](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L262)

___

### sendTransaction

▸ **sendTransaction**(`message`, `seed`, `passphrase`): `Promise`<`string`\>

Sends a custom transaction to your address, so that the backend can pick it up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`CustomMessage`](../interfaces/CustomMessage.md) | The [CustomMessage](../interfaces/CustomMessage.md) to send |
| `seed` | [`Seed`](Seed.md) | The seed as encrypted string. |
| `passphrase` | `string` | The passphrase to decrypt the seed. |

#### Returns

`Promise`<`string`\>

the transcation id.

#### Defined in

[src/wallet/wallet.ts:182](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L182)

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

#### Defined in

[src/wallet/wallet.ts:171](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L171)

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

[src/wallet/wallet.ts:52](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L52)

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

[src/wallet/wallet.ts:91](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/3d94698/src/wallet/wallet.ts#L91)
