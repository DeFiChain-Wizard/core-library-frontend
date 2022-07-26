[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Seed

# Class: Seed

The Seed provides all operations for the seed management. It will implicitely encrypt and store the seed.

This API only support addresses from the light wallet, which means that you will have to provide the 24 words as an array.

## Implements

- `DFISeed`

## Table of contents

### Methods

- [asArray](Seed.md#asarray)
- [asEncrypted](Seed.md#asencrypted)
- [asString](Seed.md#asstring)

## Constructors

### constructor

• **new Seed**(`seed`, `passphrase`)

The Seed needs to be initialized with the seed and the passphrase.

**`Throws`**

Error when the provided seed is not valid (array must have at least 24 words)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `string`[] | The seed to be stored - provided as string array of 24 words. |
| `passphrase` | `string` | The passphrase to encrypt the seed in the storage location. |

#### Defined in

[src/wallet/seed.ts:27](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/f330da5/src/wallet/seed.ts#L27)

## Methods

### asArray

▸ **asArray**(`passphrase`): `Promise`<`string`[]\>

Returns the seed as decrypted array.

Please don't call this method right after the instantiation of the class.

It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `passphrase` | `string` | The passphrase to decrypt the seed. |

#### Returns

`Promise`<`string`[]\>

the seed as array.

#### Implementation of

DFISeed.asArray

#### Defined in

[src/wallet/seed.ts:66](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/f330da5/src/wallet/seed.ts#L66)

___

### asEncrypted

▸ **asEncrypted**(): `Promise`<`string`\>

Returns the encrypted seed.

Please don't call this method right after the instantiation of the class.

It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.

#### Returns

`Promise`<`string`\>

the encyrpted seed.

#### Implementation of

DFISeed.asEncrypted

#### Defined in

[src/wallet/seed.ts:99](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/f330da5/src/wallet/seed.ts#L99)

___

### asString

▸ **asString**(`passphrase`): `Promise`<`string`\>

Returns the seed as decrypted comma-separated string.

Please don't call this method right after the instantiation of the class.

It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `passphrase` | `string` | The passphrase to decrypt the seed. |

#### Returns

`Promise`<`string`\>

the seed as comma-separated string.

#### Implementation of

DFISeed.asString

#### Defined in

[src/wallet/seed.ts:86](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/f330da5/src/wallet/seed.ts#L86)
