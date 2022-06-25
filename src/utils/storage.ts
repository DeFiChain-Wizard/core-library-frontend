import ls from "localstorage-slim";

const SEED_KEY = "seed",
  ADDRESS_KEY = "address",
  NETWORK_KEY = "network",
  VAULT_KEY = "vault";

interface StorageUtility {
  getAddress: () => string;
  getCurrentVault: () => string;
  getNetwork: () => string;
  getSeed: () => string;
  storeNetwork: (network: string) => void;
  storeSeed: (seed: string) => void;
  storeCurrentVault: (vault: string) => void;
  storeAddress: (address: string) => void;
}

/**
 * Takes care of storing data in the specified storage.
 */
class DFIStorageUtility implements StorageUtility {
  /**
   * Returns the DFI wallet address from the local storage.
   * @returns the DFI wallet address from local storage.
   */
  getAddress() {
    return `${ls.get(ADDRESS_KEY)}`;
  }

  /**
   * Stores the DFI wallet address in the local storage.
   * @param address The DFI wallet address to store.
   */
  storeAddress(address: string) {
    ls.set(ADDRESS_KEY, address);
  }

  /**
   * Returns the network from the local storage.
   * @returns the network from local storage.
   */
  getNetwork() {
    return `${ls.get(NETWORK_KEY)}`;
  }

  /**
   * Stores the network in the local storage.
   * @param network The network to store.
   */
  storeNetwork(network: string) {
    ls.set(NETWORK_KEY, network);
  }
  /**
   * Returns the encrypted seed from the local storage.
   * @returns the encrypted seed from local storage.
   */
  getSeed() {
    return `${ls.get(SEED_KEY)}`;
  }

  /**
   * Stores the encrypted seed in the local storage.
   * @param seed The encrypted seed to store.
   */
  storeSeed(seed: string) {
    ls.set(SEED_KEY, seed);
  }

  /**
   * Returns the current vault id from the local storage.
   * @returns the current vault id from local storage.
   */
  getCurrentVault() {
    return `${ls.get(VAULT_KEY)}`;
  }

  /**
   * Stores the current vault id in the local storage.
   * @param vault The  current vault id to store.
   */
  storeCurrentVault(vault: string) {
    ls.set(VAULT_KEY, vault);
  }
}

export { DFIStorageUtility };
