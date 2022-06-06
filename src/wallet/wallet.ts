import { DFIVault, Vault } from "./vault";

/**
 * Wallet interface.
 */
interface Wallet {
  getAddress: () => string;
  getVaults: () => Vault[];
  getVault: (id: string) => Vault;
  
}

/**
 * The DFIWallet implements the {@link Wallet} interface and offers all functions to interact with the DFIWallet.
 */
class DFIWallet implements Wallet {
  private address: string;
  /**
   * You need provide the DFI address to instantiate a new wallet.
   *
   * @param address The DFI address for the wallet.
   */
  constructor(address: string) {
    this.address = address;
  }
  getAddress(): string {
    return "";
  }

  getVault(id: string): Vault {
    return new DFIVault(id);
  }

  getVaults(): Vault[] {
    return [new DFIVault("test")];
  }
}

export { DFIWallet };
