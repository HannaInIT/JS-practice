import eurosFormatter from "./euroFormatter.js";

class Wallet {
  #name;
  #cash;
  #dailyAllowance = 40;
  #dayTotalWithdrawals = 0;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
  }

  get name() {
    return this.#name;
  }

    resetDailyAllowance() {
    this.#dayTotalWithdrawals = 0;
  }

  setDailyAllowance(newAllowance) {
    this.#dailyAllowance = newAllowance;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

        if (this.#dailyAllowance < this.#dayTotalWithdrawals + amount) {
      console.log(`Your limit is ${this.#dailyAllowance}`);

      return 0;
    }

     this.#dayTotalWithdrawals += amount;
    this.#cash -= amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }
}

function main() {
  const walletJack = new Wallet("Jack", 100);
  const walletJoe = new Wallet("Joe", 10);
  const walletJane = new Wallet("Jane", 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
