import { WhaleApiClient } from "@defichain/whale-api-client";
import { WhaleWalletAccount } from "@defichain/whale-api-wallet";
import { Network } from "@defichain/jellyfish-network";
import { DFIFactory } from "../blockchain/dfifactory";

interface DFITransaction {
  send: (data: string) => void;
}

class Transaction implements DFITransaction {
  private readonly client: WhaleApiClient;
  private readonly account: WhaleWalletAccount;
  private readonly network: Network;
  constructor(config: {
    client: WhaleApiClient;
    account: WhaleWalletAccount;
    network: Network;
  }) {
    this.client = config.client;
    this.account = config.account;
    this.network = config.network;
  }

  async send(data: string): Promise<string> {
    console.log("Sending transaction");
    const transaction = await DFIFactory.sendCustomTransactionWithData(
      data,
      this.client,
      this.account,
      this.network
    );

    if (transaction.vin.length > 0) return transaction.vin[0].txid;
    throw Error("No transcation ID received!");
  }
}

export { Transaction };
