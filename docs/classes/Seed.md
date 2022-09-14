[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Seed

# Class: Seed

The Seed provides all operations for the seed management. It will implicitely encrypt and store the seed.

This API only support addresses from the light wallet, which means that you will have to provide the 24 words as an array.

## Table of contents

### Methods

- [asArray](Seed.md#asarray)
- [asEncrypted](Seed.md#asencrypted)
- [asString](Seed.md#asstring)
- [build](Seed.md#build)
- [getSeedFromEncryptedString](Seed.md#getseedfromencryptedstring)

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

#### Defined in

[src/wallet/seed.ts:75](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/e8b7cc3/src/wallet/seed.ts#L75)

___

### asEncrypted

▸ **asEncrypted**(): `Promise`<`string`\>

Returns the encrypted seed.

Please don't call this method right after the instantiation of the class.

It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.

#### Returns

`Promise`<`string`\>

the encyrpted seed.

#### Defined in

[src/wallet/seed.ts:111](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/e8b7cc3/src/wallet/seed.ts#L111)

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

#### Defined in

[src/wallet/seed.ts:98](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/e8b7cc3/src/wallet/seed.ts#L98)

___

### build

▸ `Static` **build**(`seed`, `passphrase?`): `Promise`<[`Seed`](Seed.md)\>

The Seed needs to be initialized with the seed and the passphrase.
We are using the Builder pattern to allow async initialization

**`Throws`**

Error when the provided seed is not valid (array must have at least 24 words)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `string` \| `string`[] | The seed to be stored - provided as string array of 24 words. |
| `passphrase?` | `string` | The passphrase to encrypt the seed in the storage location. Passphrase is only needed when 24 words are passed. |

#### Returns

`Promise`<[`Seed`](Seed.md)\>

The Seed object

#### Defined in

[src/wallet/seed.ts:26](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/e8b7cc3/src/wallet/seed.ts#L26)

___

### getSeedFromEncryptedString

▸ `Static` **getSeedFromEncryptedString**(): `Promise`<[`Seed`](Seed.md)\>

Returns the encrypted seed from the storage.

#### Returns

`Promise`<[`Seed`](Seed.md)\>

the encrypted seed from the storage.

#### Defined in

[src/wallet/seed.ts:120](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/e8b7cc3/src/wallet/seed.ts#L120)
