import {
  PrivateKeyEncryption,
  Scrypt,
} from "@defichain/jellyfish-wallet-encrypted";
import {
  entropyAsMnemonic,
  mnemonicAsEntropy,
} from "@defichain/jellyfish-wallet-mnemonic";
import { isStringNullOrEmpty } from "./helpers";

/**
 * Raw mnemonic words encryption implementation resides in light wallet.
 */
class EncryptedMnemonicStorage {
  /**
   * jellyfish's PrivateKeyEncryption impl essentially work for infinite length of data
   */
  private readonly encryption: PrivateKeyEncryption;

  constructor() {
    this.encryption = new PrivateKeyEncryption(new Scrypt(), () => {
      var array = new Uint16Array(16);
      return Buffer.from(crypto.getRandomValues(array));
    });
  }

  /**
   * Encrypts mnemonic words.
   *
   * @param {string[]} words
   * @param {string} passphrase
   */
  async encrypt(words: string[], passphrase: string): Promise<string> {
    const buffer = mnemonicAsEntropy(words);
    const encryptedData = await this.encryption.encrypt(buffer, passphrase);
    const encoded = encryptedData.encode();
    return encoded;
  }

  /**
   * Retrieve encrypted value from secure store, deserialize, decrypt, deserialize buffer (decryption result) into words array
   *
   * @param {string} passphrase
   * @returns {string[]}
   */
  async decrypt(encrypted: string, passphrase: string): Promise<string[]> {
    if (isStringNullOrEmpty(encrypted)) {
      throw new Error("Seed to decrypt is not valid!");
    }

    try {
      const buffer = await this.encryption.decrypt(encrypted, passphrase);
      return entropyAsMnemonic(buffer);
    } catch (e) {
      throw new Error(
        "Seed does not seem to be valid. Please check your 24 words."
      );
    }
  }
}

export const MnemonicStorage = new EncryptedMnemonicStorage();
