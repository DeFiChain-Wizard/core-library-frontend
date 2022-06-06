import {
  PrivateKeyEncryption,
  Scrypt,
} from "@defichain/jellyfish-wallet-encrypted";
import {
  entropyAsMnemonic,
  mnemonicAsEntropy,
} from "@defichain/jellyfish-wallet-mnemonic";
import { isStringNullOrEmpty } from "../utils/helpers";

/**
 * Raw mnemonic words encryption implementation reside in light wallet
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
   * Encrypt mnemonic words, and store into persistent storage.
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

    const buffer = await this.encryption.decrypt(encrypted, passphrase);
    return entropyAsMnemonic(buffer);
  }
}

export const MnemonicStorage = new EncryptedMnemonicStorage();
