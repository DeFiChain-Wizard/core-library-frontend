import { MnemonicStorage } from "../blockchain/mnemonicstorage";
import { DFIStorageUtility } from "../utils/storage";
/**
 * This SeedUtility provides all operations for the seed management. It will implicitely encrypt the seed.
 */
interface SeedUtility {
  getSeedAsArray: (passphrase: string) => Promise<string[]>;
  getSeedAsString: (passphrase: string) => Promise<string>;
  getSeedEncrypted: () => string;
  setSeed: (seedPhrase: string[], passphrase: string) => void;
}

class DFISeedUtility implements SeedUtility {
  private storage = new DFIStorageUtility();

  /**
   * Returns the seed as array.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as array.
   */
  async getSeedAsArray(passphrase: string) {
    return await MnemonicStorage.decrypt(this.storage.getSeed(), passphrase);
  }

  /**
   * Returns the seed as comma-separated string.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as comma-separated string.
   */
  async getSeedAsString(passphrase: string) {
    return (
      await MnemonicStorage.decrypt(this.storage.getSeed(), passphrase)
    ).join(",");
  }

  /**
   * Returns the encrypted seed as stored.
   * @returns the encyrpted seed.
   */
  getSeedEncrypted() {
    return this.storage.getSeed();
  }
  /**
   * Overwrites the seed that has been set before.
   * @param seed The seed as array of words.
   * @param passphrase The passphrase to encrypt the seed.
   */
  async setSeed(seed: string[], passphrase: string) {
    // clean up seed first
    const seedCleanedUp = seed.map((words) => words.trim());
    //store now
    this.storage.storeSeed(
      await MnemonicStorage.encrypt(seedCleanedUp, passphrase)
    );
  }
}

export { DFISeedUtility };
