import { MnemonicStorage } from "../utils/mnemonicstorage";
import { DFIStorageUtility } from "../utils/storage";
/**
 * The Seed provides all operations for the seed management. It will implicitely encrypt the seed.
 */
interface DFISeed {
  asArray: (passphrase: string) => Promise<string[]>;
  asString: (passphrase: string) => Promise<string>;
  asEncrypted: () => string;
  set: (seedPhrase: string[], passphrase: string) => void;
}

class Seed implements DFISeed {
  private storage = new DFIStorageUtility();

  /**
   * Returns the seed as array.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as array.
   */
  async asArray(passphrase: string) {
    return await MnemonicStorage.decrypt(this.storage.getSeed(), passphrase);
  }

  /**
   * Returns the seed as comma-separated string.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as comma-separated string.
   */
  async asString(passphrase: string) {
    return (
      await MnemonicStorage.decrypt(this.storage.getSeed(), passphrase)
    ).join(",");
  }

  /**
   * Returns the encrypted seed as stored.
   * @returns the encyrpted seed.
   */
  asEncrypted() {
    return this.storage.getSeed();
  }
  /**
   * Sets the seed, which will be encrypted and stored in local storage.
   * @param seed The seed as array of words.
   * @param passphrase The passphrase to encrypt the seed.
   */
  async set(seed: string[], passphrase: string) {
    // clean up seed first
    const seedCleanedUp = seed.map((words) => words.trim());
    //store now
    this.storage.storeSeed(
      await MnemonicStorage.encrypt(seedCleanedUp, passphrase)
    );
  }
}

export { Seed };
