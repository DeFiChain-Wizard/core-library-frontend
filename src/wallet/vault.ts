import {
  LoanScheme,
  LoanVaultActive,
  LoanVaultState,
  LoanVaultTokenAmount,
} from "@defichain/whale-api-client/dist/api/loan";
class DFIVault implements LoanVaultActive {
  vaultId: string;
  loanScheme: LoanScheme;
  ownerAddress: string;
  state:
    | LoanVaultState.UNKNOWN
    | LoanVaultState.ACTIVE
    | LoanVaultState.FROZEN
    | LoanVaultState.MAY_LIQUIDATE;
  informativeRatio: string;
  collateralRatio: string;
  collateralValue: string;
  loanValue: string;
  interestValue: string;
  collateralAmounts: LoanVaultTokenAmount[];
  loanAmounts: LoanVaultTokenAmount[];
  interestAmounts: LoanVaultTokenAmount[];

  constructor(vault: LoanVaultActive) {
    this.vaultId = vault.vaultId;
    this.collateralAmounts = vault.collateralAmounts;
    this.loanScheme = vault.loanScheme;
    this.ownerAddress = vault.ownerAddress;
    this.state = vault.state;
    this.informativeRatio = vault.informativeRatio;
    this.collateralRatio = vault.collateralRatio;
    this.collateralValue = vault.collateralValue;
    this.loanValue = vault.loanValue;
    this.interestValue = vault.interestValue;
    this.loanAmounts = vault.loanAmounts;
    this.interestAmounts = vault.interestAmounts;
  }
}

export { DFIVault };
