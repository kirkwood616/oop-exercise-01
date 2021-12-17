class BankAccount {
  balance: number = 0;
  interestRate: number = 0;
  constructor(balance: number, interestRate: number) {
    this.balance = balance;
    this.interestRate = interestRate;
  }
  addInterest(): void {
    this.balance = this.balance * (1 + this.interestRate);
  }
}

export default BankAccount;
