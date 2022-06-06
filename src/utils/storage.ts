import ls from "localstorage-slim";

const SEED_KEY = "seed",
  ADDRESS_KEY = "address",
  NETWORK_KEY = "network",
  VAULT_KEY = "vault";
interface StorageUtility {
  getAddress: () => string;
  getNetwork: () => string;
  getSeed: () => string;
  storeNetwork: (network: string) => void;
  storeSeed: (seed: string) => void;
  storeAddress: (address: string) => void;
}
class DFIStorageUtility implements StorageUtility {
  getAddress() {
    return `${ls.get(ADDRESS_KEY)}`;
  }

  storeAddress(address: string) {
    ls.set(ADDRESS_KEY, address);
  }

  getNetwork() {
    return `${ls.get(NETWORK_KEY)}`;
  }

  storeNetwork(network: string) {
    ls.set(NETWORK_KEY, network);
  }
  getSeed() {
    return `${ls.get(SEED_KEY)}`;
  }

  storeSeed(seed: string) {
    ls.set(SEED_KEY, seed);
  }
}

export { DFIStorageUtility };
