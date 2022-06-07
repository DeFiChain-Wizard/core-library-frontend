[@defichainwizard/core](../README.md) / [Exports](../modules.md) / Vault

# Class: Vault

## Implements

- `DFIVault`

## Table of contents

### Constructors

- [constructor](Vault.md#constructor)

### Properties

- [collateralAmounts](Vault.md#collateralamounts)
- [collateralRatio](Vault.md#collateralratio)
- [collateralValue](Vault.md#collateralvalue)
- [informativeRatio](Vault.md#informativeratio)
- [interestAmounts](Vault.md#interestamounts)
- [interestValue](Vault.md#interestvalue)
- [loanAmounts](Vault.md#loanamounts)
- [loanScheme](Vault.md#loanscheme)
- [loanValue](Vault.md#loanvalue)
- [ownerAddress](Vault.md#owneraddress)
- [state](Vault.md#state)
- [vaultId](Vault.md#vaultid)

## Constructors

### constructor

• **new Vault**(`vault`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | `LoanVaultActive` |

#### Defined in

[wallet/vault.ts:28](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L28)

## Properties

### collateralAmounts

• **collateralAmounts**: `LoanVaultTokenAmount`[]

#### Implementation of

DFIVault.collateralAmounts

#### Defined in

[wallet/vault.ts:24](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L24)

___

### collateralRatio

• **collateralRatio**: `string`

#### Implementation of

DFIVault.collateralRatio

#### Defined in

[wallet/vault.ts:20](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L20)

___

### collateralValue

• **collateralValue**: `string`

#### Implementation of

DFIVault.collateralValue

#### Defined in

[wallet/vault.ts:21](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L21)

___

### informativeRatio

• **informativeRatio**: `string`

#### Implementation of

DFIVault.informativeRatio

#### Defined in

[wallet/vault.ts:19](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L19)

___

### interestAmounts

• **interestAmounts**: `LoanVaultTokenAmount`[]

#### Implementation of

DFIVault.interestAmounts

#### Defined in

[wallet/vault.ts:26](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L26)

___

### interestValue

• **interestValue**: `string`

#### Implementation of

DFIVault.interestValue

#### Defined in

[wallet/vault.ts:23](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L23)

___

### loanAmounts

• **loanAmounts**: `LoanVaultTokenAmount`[]

#### Implementation of

DFIVault.loanAmounts

#### Defined in

[wallet/vault.ts:25](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L25)

___

### loanScheme

• **loanScheme**: `LoanScheme`

#### Implementation of

DFIVault.loanScheme

#### Defined in

[wallet/vault.ts:12](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L12)

___

### loanValue

• **loanValue**: `string`

#### Implementation of

DFIVault.loanValue

#### Defined in

[wallet/vault.ts:22](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L22)

___

### ownerAddress

• **ownerAddress**: `string`

#### Implementation of

DFIVault.ownerAddress

#### Defined in

[wallet/vault.ts:13](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L13)

___

### state

• **state**: `UNKNOWN` \| `ACTIVE` \| `FROZEN` \| `MAY_LIQUIDATE`

#### Implementation of

DFIVault.state

#### Defined in

[wallet/vault.ts:14](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L14)

___

### vaultId

• **vaultId**: `string`

#### Implementation of

DFIVault.vaultId

#### Defined in

[wallet/vault.ts:11](https://github.com/DeFiChain-Wizard/core-library-frontend/blob/8835410/src/wallet/vault.ts#L11)
