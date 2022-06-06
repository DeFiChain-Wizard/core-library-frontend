interface Vault {
  address: string;
}

class DFIVault implements Vault {
  address: string;
  constructor(address: string) {
    this.address = address;
  }
}

export { Vault, DFIVault };
