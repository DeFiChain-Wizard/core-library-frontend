import { DFIVault } from "./vault";
import { DFIStorageUtility } from "../utils/storage";
import { MainNet } from "@defichain/jellyfish-network";
import { WhaleApiClient } from "@defichain/whale-api-client";
import { OCEAN_URL, OCEAN_VERSION } from "../utils/configuration";
import {
  LoanVaultActive,
  LoanVaultLiquidated,
  LoanVaultState,
} from "@defichain/whale-api-client/dist/api/loan";

/**
 * Wallet interface.
 */
interface Wallet {
  getAddress: () => string;
  getNetwork: () => string;
  getVaults: () => Promise<DFIVault[]>;
  getVault: (id: string) => Promise<DFIVault>;
  getCurrentVault: () => Promise<DFIVault>;
}

/**
 * The DFIWallet offers all functions to interact with the DFIWallet.
 */
class DFIWallet implements Wallet {
  private storage = new DFIStorageUtility();
  private client: WhaleApiClient;
  /**
   * You need provide the DFI address to instantiate a new wallet.
   *
   * @param address The DFI address for the wallet.
   */
  constructor(address: string, network = MainNet.name) {
    this.storage.storeAddress(address);
    this.storage.storeNetwork(network);
    this.client = new WhaleApiClient({
      url: OCEAN_URL,
      version: OCEAN_VERSION,
      network,
    });
    // store all vaults in localstorage as well
  }

  /**
   * Returns the network used for this wallet ('mainnet', 'testnet',...)
   * @returns The network used for this wallet.
   */
  getNetwork(): string {
    return this.storage.getNetwork();
  }

  /**
   * Returns the address used for this wallet. Usually starts with 'df1...'.
   * @returns The address used for this wallet.
   */
  getAddress(): string {
    return this.storage.getAddress();
  }

  /**
   * Returns a certain vault used for this wallet.
   * @param id The ID of the vault to be used.
   * @returns The vault used for this wallet.
   */
  async getVault(id: string): Promise<DFIVault> {
    // get vaults and filter active ones
    const dfiVaults = (await this.client.address.listVault(this.getAddress()))
      .filter(this.isActive)
      .filter((vault) => vault.vaultId === id);
    if (dfiVaults.length === 0)
      throw new Error(`No vault with given ID found - ID: ${id}.`);
    return new DFIVault(dfiVaults[0]);
  }

  /**
   * Returns the current vault.
   * @returns The vault currently stored vault to be used for management.
   */
  async getCurrentVault(): Promise<DFIVault> {
    const id = this.storage.getCurrentVault();
    if (!id)
      throw new Error(
        "You tried to get the current vault, but no stored vault was found!"
      );
    return this.getVault(id);
  }

  /**
   * Returns {@link LoanVaultActive} if vault is in active state.
   * @param vault the vault to be checked
   * @returns {@link LoanVaultActive} if vault is in active state.
   */
  private isActive(
    vault: LoanVaultActive | LoanVaultLiquidated
  ): vault is LoanVaultActive {
    return vault.state === LoanVaultState.ACTIVE;
  }
  /**
   * Returns all vaults that have been created in this wallet.
   * @returns All vaults found for this wallet.
   */
  async getVaults(): Promise<DFIVault[]> {
    // get vaults and filter active ones
    const dfiVaults = (
      await this.client.address.listVault(this.getAddress())
    ).filter(this.isActive);

    let vaults: DFIVault[] = [];
    for (let vault of dfiVaults) {
      vaults.push(new DFIVault(vault));
    }
    return vaults;
  }
}

export { DFIWallet };
