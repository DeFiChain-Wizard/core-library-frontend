interface StorageUtility {
  getSeed: () => string;
  storeSeed: (seed: string) => void;
}

class DFIStorageUtility implements StorageUtility {
  getSeed() {
    return "123345";
  }

  storeSeed(seed: string) {
    console.log("Storing: ", seed);
  }
}

export { DFIStorageUtility };
