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
   * Private Constructor used by the static build method. All initialization is done in build
   */
  private constructor() {}
  /**
   * The Seed needs to be initialized with the seed and the passphrase.
   * We are using the Builder pattern to allow async initialization
   *
   * @param seed The seed to be stored - provided as string array of 24 words.
   * @param passphrase The passphrase to encrypt the seed in the storage location.
   * @returns The Seed object
   * @throws Error when the provided seed is not valid (array must have at least 24 words)
   */
  public static async build(
    seed: string[],
    passphrase: string
  ): Promise<Seed> {
    if (!isSeedValid(seed)) {
      throw Error("Cannot create seed. Please check provided seed.");
    }

    // if seed words contain spaces, we'll have to trim the before.
    const seedCleanedUp = seed.map((words) => words.trim());
    /**
     *
     * Encrypts the seed with a given passphrase!
     *
     */
    const encryptedSeed = await MnemonicStorage.encrypt(
      seedCleanedUp,
      passphrase
    );
    const seedObj = new Seed();
    await seedObj.initSeed(encryptedSeed);
    return seedObj;
  }
  /**
   * init a new Seed Object, this method is used by the builder Pattern
   * @param encryptedSeed The already encrypted Seed
   * */
  private async initSeed(encryptedSeed: string): Promise<void> {
    await this.storage.storeSeed(encryptedSeed);
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
      seed = await MnemonicStorage.decrypt(
        await this.asEncrypted(),
        passphrase
      );
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
