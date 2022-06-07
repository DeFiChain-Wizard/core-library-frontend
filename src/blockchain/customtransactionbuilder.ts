import { P2WPKHTxnBuilder } from "@defichain/jellyfish-transaction-builder/dist";
import {
  DeFiTransactionConstants,
  Transaction,
  TransactionSegWit,
  CTransactionSegWit,
  Script,
  Vout,
  OP_PUSHDATA,
  OP_CODES,
} from "@defichain/jellyfish-transaction";
import { BigNumber } from "@defichain/jellyfish-api-core";
import { WhaleApiClient } from "@defichain/whale-api-client";

class CustomTXBuilder extends P2WPKHTxnBuilder {
  async getCustomTx(data: string, changeScript: Script) {
    const wizardTransactionPrefix = "WzTx";
    const { prevouts, vin, total } = await this.allPrevouts();
    const buf = Buffer.from(wizardTransactionPrefix + data);
    const op = new OP_PUSHDATA(buf, "little");
    const deFiOut: Vout = {
      value: new BigNumber(0),
      script: {
        // stack: [op]
        stack: [OP_CODES.OP_RETURN, OP_CODES.OP_0, op], // We need to add the OP_0 for some reason, otherwise our transaction is always rejected...
      },
      tokenId: 0x00,
    };

    const change: Vout = {
      value: total,
      script: changeScript,
      tokenId: 0x00,
    };

    const txn: Transaction = {
      version: DeFiTransactionConstants.Version,
      vin: vin,
      vout: [deFiOut, change],
      lockTime: 0x00000000,
    };

    const fee = await this.calculateFee(txn);
    change.value = total.minus(fee);

    return await this.sign(txn, prevouts);
  }

  async sendTransaction(config: {
    txn: TransactionSegWit;
    initialWaitTime: number;
    waitTime: number;
    retries: number;
    client: WhaleApiClient;
  }): Promise<CTransactionSegWit> {
    const ctx = new CTransactionSegWit(config.txn);
    const hex: string = ctx.toHex();
    let start = config.initialWaitTime;

    //TODO: Maybe we can make this code more readable. As clever as it is, might be hard to understand
    await new Promise((resolve, error) => {
      let intervalID: NodeJS.Timeout;
      const send = (): void => {
        config.client.rawtx
          .send({ hex: hex })
          .then((txId) => {
            if (intervalID !== undefined) {
              clearInterval(intervalID);
            }
            console.log("Done");
            console.log(txId);
            resolve(txId);
          })
          .catch((e) => {
            if (start >= config.waitTime * config.retries) {
              if (intervalID !== undefined) {
                clearInterval(intervalID);
              }
              console.error(e);
              error(e);
            }
          });
      };
      setTimeout(() => {
        send();
        intervalID = setInterval(() => {
          start += config.waitTime;
          send();
        }, config.waitTime);
      }, config.initialWaitTime);
    });
    return ctx;
  }
}

export { CustomTXBuilder };
