import AsyncStorage from '@react-native-async-storage/async-storage';

const SEED_KEY = "seed",
  ADDRESS_KEY = "address",
  NETWORK_KEY = "network",
  VAULT_KEY = "vault";

interface StorageUtility {
  getAddress: () => Promise<string>;
  getCurrentVault: () => Promise<string>;
  getNetwork: () => Promise<string>;
  getSeed: () => Promise<string>;
  storeNetwork: (network: string) => Promise<void>;
  storeSeed: (seed: string) => Promise<void>;
  storeCurrentVault: (vault: string) => Promise<void>;
  storeAddress: (address: string) => Promise<void>;
}

/**
 * Takes care of storing data in the specified storage.
 */
class DFIStorageUtility implements StorageUtility {
  /**
   * Returns the DFI wallet address from the local storage.
   * @returns the DFI wallet address from local storage.
   */
  async getAddress() {
    return await AsyncStorage.getItem(`@${ADDRESS_KEY}`) ?? ""
  }

  /**
   * Stores the DFI wallet address in the local storage.
   * @param address The DFI wallet address to store.
   */
  async storeAddress(address: string) {
    await AsyncStorage.setItem(`@${ADDRESS_KEY}`, address)
  }

  /**
   * Returns the network from the local storage.
   * @returns the network from local storage.
   */
  async getNetwork() {
    return await AsyncStorage.getItem(`@${NETWORK_KEY}`) ?? ""
  }

  /**
   * Stores the network in the local storage.
   * @param network The network to store.
   */
  async storeNetwork(network: string) {
    await AsyncStorage.setItem(`@${NETWORK_KEY}`, network)
  }
  /**
   * Returns the encrypted seed from the local storage.
   * @returns the encrypted seed from local storage.
   */
  async getSeed() {
    return await AsyncStorage.getItem(`@${SEED_KEY}`) ?? ""
  }

  /**
   * Stores the encrypted seed in the local storage.
   * @param seed The encrypted seed to store.
   */
  async storeSeed(seed: string) {
    await AsyncStorage.setItem(`@${SEED_KEY}`, seed)
  }

  /**
   * Returns the current vault id from the local storage.
   * @returns the current vault id from local storage.
   */
  async getCurrentVault() {
    return await AsyncStorage.getItem(`@${VAULT_KEY}`) ?? ""
  }

  /**
   * Stores the current vault id in the local storage.
   * @param vault The  current vault id to store.
   */
  async storeCurrentVault(vault: string) {
    await AsyncStorage.setItem(`@${VAULT_KEY}`, vault)
  }
}

export { DFIStorageUtility };
