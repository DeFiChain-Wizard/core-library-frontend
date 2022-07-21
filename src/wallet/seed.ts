import { isSeedValid } from "../utils/helpers";
import { MnemonicStorage } from "../utils/mnemonicstorage";
import { DFIStorageUtility } from "../utils/storage";

interface DFISeed {
  asArray: (passphrase: string) => Promise<string[]>;
  asString: (passphrase: string) => Promise<string>;
  asEncrypted: () => Promise<string>;
}

/**
 * The Seed provides all operations for the seed management. It will implicitely encrypt and store the seed.
 *
 * This API only support addresses from the light wallet, which means that you will have to provide the 24 words as an array.
 */
class Seed implements DFISeed {
  private storage = new DFIStorageUtility();

  /**
   * The Seed needs to be initialized with the seed and the passphrase.
   *
   * @param seed The seed to be stored - provided as string array of 24 words.
   * @param passphrase The passphrase to encrypt the seed in the storage location.
   *
   * @throws Error when the provided seed is not valid (array must have at least 24 words)
   */
  constructor(seed: string[], passphrase: string) {
    if (!isSeedValid(seed)) {
      throw Error("Cannot create seed. Please check provided seed.");
    }

    // if seed words contain spaces, we'll have to trim the before.
    const seedCleanedUp = seed.map((words) => words.trim());

    /**
     *
     * Encrypts the seed with a given passphrase!
     *
     * BEWARE:
     *
     * This is not so cool. Encryption takes some time...
     *
     * So if someone accesses one of the getters right after the instantiation, it will crash.
     *
     * - Constructor can't be async.
     * - I don't want to create an empty constructor + an extra set() method (had that before)
     * - Maybe I can built in a check into the getters and then wait for a sec to try again... still not beautiful.
     * */
    MnemonicStorage.encrypt(seedCleanedUp, passphrase)
      .then((value) => this.storage.storeSeed(value))
      .catch((e) => {
        throw Error(e);
      });
  }

  /**
   * Returns the seed as decrypted array.
   *
   * Please don't call this method right after the instantiation of the class.
   *
   * It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.
   *
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as array.
   */
  async asArray(passphrase: string) {
    let seed: string[];
    try {
      seed = await MnemonicStorage.decrypt(await this.asEncrypted(), passphrase);
    } catch (e) {
      throw Error("Seed could not be decrypted. Please check passphrase.");
    }
    return seed;
  }

  /**
   * Returns the seed as decrypted comma-separated string.
   *
   * Please don't call this method right after the instantiation of the class.
   *
   * It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.
   *
   * @param passphrase The passphrase to decrypt the seed.
   * @returns the seed as comma-separated string.
   */
  async asString(passphrase: string): Promise<string> {
    return (await this.asArray(passphrase)).join(",");
  }

  /**
   * Returns the encrypted seed.
   *
   * Please don't call this method right after the instantiation of the class.
   *
   * It will crash - storing the encrypted seed during the instantiation might take 1-2 seconds.
   *
   * @returns the encyrpted seed.
   */
  async asEncrypted() {
    return await this.storage.getSeed();
  }
}

export { Seed };
