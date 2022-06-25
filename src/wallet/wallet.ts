import { DFIStorageUtility } from "../utils/storage";
import { MainNet, TestNet, Network } from "@defichain/jellyfish-network";
import { WhaleApiClient } from "@defichain/whale-api-client";
import { OCEAN_URL, OCEAN_VERSION } from "../utils/configuration";
import {
  LoanVaultActive,
  LoanVaultLiquidated,
  LoanVaultState,
} from "@defichain/whale-api-client/dist/api/loan";
import { DFIFactory } from "../blockchain/dfifactory";
import { Seed } from "./seed";
import { AddressToken } from "@defichain/whale-api-client/dist/api/address";
import {
  Transaction,
  CustomMessage,
  TransactionConfig,
} from "@defichainwizard/custom-transactions";

/**
 * The DFI Wallet interface.
 */
interface DFIWallet {
  getAddress: () => string;
  getNetworkAsString: () => string;
  getVaults: () => Promise<LoanVaultActive[]>;
  getVault: (id: string) => Promise<LoanVaultActive>;
  getCurrentVault: () => Promise<LoanVaultActive>;
  listTokens: () => Promise<AddressToken[]>;
  getUTXOBalance: () => Promise<Number>;
  setCurrentVault: (id: string) => void;
  sendTransaction: (
    message: CustomMessage,
    seed: Seed,
    passphrase: string
  ) => void;
}

/**
 * The DFIWallet offers all functions to interact with the DFIWallet.
 */
class Wallet implements DFIWallet {
  private readonly storage = new DFIStorageUtility();
  private readonly client: WhaleApiClient;
  private readonly network: Network;
  /**
   * The DFI Wallet Address and the network is needed to instantiate the wallet.
   *
   * @param address the DFI wallet address
   * @param network the network as string (e.g. mainnet, testnet)
   */
  constructor(address: string, network = "mainnet") {
    this.storage.storeAddress(address);
    this.storage.storeNetwork(network);
    this.network = network.toLowerCase() === "mainnet" ? MainNet : TestNet;
    this.client = new WhaleApiClient({
      url: OCEAN_URL,
      version: OCEAN_VERSION,
      network: this.network.name,
    });
  }

  /**
   * Returns the current {@link WhaleApiClient}.
   * @returns The current {@link WhaleApiClient}.
   */
  getClient(): WhaleApiClient {
    return this.client;
  }

  /**
   * Returns the network used for this wallet ('mainnet', 'testnet',...) as string.
   * @returns The network used for this wallet as string.
   */
  getNetworkAsString(): string {
    return this.storage.getNetwork();
  }

  /**
   * Returns the {@link Network} used for this wallet ('mainnet', 'testnet',...).
   * @returns The network used for this wallet.
   */
  getNetwork(): Network {
    return this.network;
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
  async getVault(id: string): Promise<LoanVaultActive> {
    // get vaults and filter active ones
    const dfiVaults = (await this.client.address.listVault(this.getAddress()))
      .filter(this.isActive)
      .filter((vault) => vault.vaultId === id);
    if (dfiVaults.length === 0)
      throw new Error(`No vault with given ID found - ID: ${id}.`);
    return dfiVaults[0];
  }

  /**
   * Returns the current vault.
   * @returns The vault currently stored vault to be used for management.
   */
  async getCurrentVault(): Promise<LoanVaultActive> {
    const id = this.storage.getCurrentVault();
    if (!id)
      throw new Error(
        "You tried to get the current vault, but no stored vault was found!"
      );
    return this.getVault(id);
  }

  /**
   * Stores the current vault to be managed by the wizard.
   * @param id The id of the vault to be used as current vault.
   */
  setCurrentVault(id: string) {
    this.storage.storeCurrentVault(id);
  }

  /**
   * Sends a custom transaction to your address, so that the backend can pick it up.
   * @param message The {@link CustomMessage} to send
   * @param seed The seed object.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the transcation id.
   */
  async sendTransaction(
    message: CustomMessage,
    seed: Seed,
    passphrase: string
  ): Promise<string> {
    const config: TransactionConfig = {
      client: this.client,
      account: await DFIFactory.getAccount(this, seed, passphrase),
      network: this.network,
      passphrase: await seed.asArray(passphrase),
    };

    return await new Transaction(config).send(message);
  }

  /**
   * Returns {@link LoanVaultActive} if vault is in active state.
   *
   * Info: This is an internal type guard to make sure that only active vaults will be displayed to the user.
   *
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
  async getVaults(): Promise<LoanVaultActive[]> {
    // get vaults and filter active ones
    const dfiVaults = (
      await this.client.address.listVault(this.getAddress())
    ).filter(this.isActive);

    let vaults: LoanVaultActive[] = [];
    for (let vault of dfiVaults) {
      vaults.push(vault);
    }
    return vaults;
  }

  /**
   * Returns a list of tokens stored in the wallet.
   *
   * @returns An array of tokens that are stored in the wallet.
   */
  async listTokens(): Promise<AddressToken[]> {
    const tokens = await this.client.address.listToken(this.getAddress(), 200);
    const returnTokens: AddressToken[] = [];
    tokens.map((token) => {
      returnTokens.push(token);
    });
    return returnTokens;
  }

  /**
   * Returns the UTXO Balance of the wallet.
   * @returns The UTXO Balance of the wallet.
   */
  async getUTXOBalance(): Promise<Number> {
    const balance = await this.client.address.getBalance(this.getAddress());
    return Number(balance);
  }
}

export { Wallet };
