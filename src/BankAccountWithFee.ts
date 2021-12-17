import BankAccount from "./bankaccounts";

class BankAccountWithFee extends BankAccount {
  fee: number = 2;
  applyFee(): void {
    this.balance -= this.fee;
  }
}

let capitolOne: BankAccountWithFee = new BankAccountWithFee(1000, 0.03);

let lakeMichigan: BankAccountWithFee = new BankAccountWithFee(500, 0.05);

console.log(capitolOne.balance);
capitolOne.applyFee();
console.log(capitolOne.balance);

console.log(lakeMichigan.balance);
lakeMichigan.addInterest();
lakeMichigan.applyFee();
console.log(lakeMichigan.balance);

export default BankAccountWithFee;
