[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Seed

# Class: Seed

## Implements

- `DFISeed`

## Table of contents

### Constructors

- [constructor](Seed.md#constructor)

### Methods

- [asArray](Seed.md#asarray)
- [asEncrypted](Seed.md#asencrypted)
- [asString](Seed.md#asstring)
- [set](Seed.md#set)

## Constructors

### constructor

• **new Seed**()

## Methods

### asArray

▸ **asArray**(`passphrase`): `Promise`<`string`[]\>

Returns the seed as array.

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

[wallet/seedutility.ts:21](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/seedutility.ts#L21)

___

### asEncrypted

▸ **asEncrypted**(): `string`

Returns the encrypted seed as stored.

#### Returns

`string`

the encyrpted seed.

#### Implementation of

DFISeed.asEncrypted

#### Defined in

[wallet/seedutility.ts:40](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/seedutility.ts#L40)

___

### asString

▸ **asString**(`passphrase`): `Promise`<`string`\>

Returns the seed as comma-separated string.

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

[wallet/seedutility.ts:30](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/seedutility.ts#L30)

___

### set

▸ **set**(`seed`, `passphrase`): `Promise`<`void`\>

Sets the seed, which will be encrypted and stored in local storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `string`[] | The seed as array of words. |
| `passphrase` | `string` | The passphrase to encrypt the seed. |

#### Returns

`Promise`<`void`\>

#### Implementation of

DFISeed.set

#### Defined in

[wallet/seedutility.ts:48](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/seedutility.ts#L48)
