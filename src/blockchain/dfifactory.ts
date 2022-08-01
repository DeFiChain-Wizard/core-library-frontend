import {
  WhaleWalletAccount,
  WhaleWalletAccountProvider,
} from "@defichain/whale-api-wallet";
import { Network } from "@defichain/jellyfish-network";
import { JellyfishWallet, WalletHdNode } from "@defichain/jellyfish-wallet";
import {
  Bip32Options,
  MnemonicHdNodeProvider,
} from "@defichain/jellyfish-wallet-mnemonic";
import { WhaleApiClient } from "@defichain/whale-api-client";
import { Seed, Wallet } from "../wallet";
import { logDebug } from "@defichainwizard/custom-logging";

const SEED_PHRASE_LENGTH = 24;

interface JellyWallet {
  wallet: JellyfishWallet<WhaleWalletAccount, WalletHdNode>;
  account?: WhaleWalletAccount;
}

/**
 * Provides some standard methods to interact with the JellyWallet API.
 */
class DFIFactory {
  static async getAccount(
    dfiWallet: Wallet,
    seed: Seed,
    passphrase: string
  ): Promise<WhaleWalletAccount> {
    try {
      const wallet = DFIFactory.getWallet(
        await seed.asArray(passphrase),
        dfiWallet.getNetwork(),
        dfiWallet.getClient()
      );

      if (wallet.wallet) {
        logDebug("Wallet created!");
      }

      logDebug("Checking for addresses on wallet...");
      const accounts = await wallet.wallet.discover();
      if (accounts.length === 0)
        throw new Error(
          "No accounts found for the given account. Please check your seed phrase or make sure you have at least one transaction in that wallet."
        );

      wallet.account = undefined;

      logDebug(
        `Checking if your address (${await dfiWallet.getAddress()}) is on the account...`
      );
      for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        const address = await account.getAddress();
        if (address === (await dfiWallet.getAddress())) {
          logDebug(
            `Address found: ${address}! Will return initialized wallet.`
          );
          wallet.account = account;
          break;
        }
      }

      if (!wallet.account) {
        throw new Error(
          `Your given address (${await dfiWallet.getAddress()}) was not found on the wallet. Please check your config.`
        );
      }
      return wallet.account;
    } catch (e) {
      throw new Error(
        "There was a problem creating your wallet. Please check your address and wether your provided seed is correct. If you are using anything but the mainnet, please make sure to provide the network explicitly."
      );
    }
  }

  /**
   * Returns an instance of the Jellywallet to interact with the wallet.
   *
   * @param seed The seed as 24-word-string-array.
   * @param network The network to use.
   * @param client the {@link WhaleApiClient}
   * @returns The Jellywallet object.
   */
  static getWallet(
    seed: string[],
    network: Network,
    client: WhaleApiClient
  ): JellyWallet {
    logDebug(`Trying to create wallet on network "${network}".`);
    if (seed && seed.length === SEED_PHRASE_LENGTH) {
      return {
        wallet: new JellyfishWallet(
          MnemonicHdNodeProvider.fromWords(
            seed,
            DFIFactory.bip32Options(network),
            true
          ),
          new WhaleWalletAccountProvider(client, network)
        ),
      };
    } else {
      throw new Error(
        `Please check your seedphrase (length: ${seed?.length}). It does not seem to be valid!`
      );
    }
  }

  /**
   * The DeFiChain Bip32 Options to use for this wallet.
   * @param network The network to use.
   * @returns The BIP32 options for the given DeFiChain network.
   */
  private static bip32Options(network: Network): Bip32Options {
    return {
      bip32: {
        public: network.bip32.publicPrefix,
        private: network.bip32.privatePrefix,
      },
      wif: network.wifPrefix,
    };
  }
}

export { DFIFactory };
