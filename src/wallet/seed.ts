import { isSeedValid } from "../utils/helpers";
import { MnemonicStorage } from "../utils/mnemonicstorage";
import { DFIStorageUtility } from "../utils/storage";
/**
 * The Seed provides all operations for the seed management. It will implicitely encrypt the seed.
 */
interface DFISeed {
  asArray: (passphrase: string) => Promise<string[]>;
  asString: (passphrase: string) => Promise<string>;
  asEncrypted: () => string;
}

class Seed implements DFISeed {
  private storage = new DFIStorageUtility();

  constructor(seed: string[], passphrase: string) {
    if (!isSeedValid(seed)) {
      throw Error("Cannot create seed. Please check provided seed.");
    }
    // clean up seed first
    const seedCleanedUp = seed.map((words) => words.trim());
    MnemonicStorage.encrypt(seedCleanedUp, passphrase)
      .then((value) => this.storage.storeSeed(value))
      .catch((e) => {
        throw Error(e);
      });
  }

  /**
   * Returns the seed as array.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as array.
   */
  async asArray(passphrase: string) {
    let seed: string[];
    try {
      seed = await MnemonicStorage.decrypt(this.asEncrypted(), passphrase);
    } catch (e) {
      throw Error("Seed could not be decrypted. Please check passphrase.");
    }
    return seed;
  }

  /**
   * Returns the seed as comma-separated string.
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as comma-separated string.
   */
  async asString(passphrase: string): Promise<string> {
    return (await this.asArray(passphrase)).join(",");
  }

  /**
   * Returns the encrypted seed as stored.
   * @returns the encyrpted seed.
   */
  asEncrypted() {
    return this.storage.getSeed();
  }
}

export { Seed };
