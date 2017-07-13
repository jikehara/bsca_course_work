// console.log("Hellow World!")
// Author: Joseph Ikehara
// Exercise for BSCA coursework: June 11, 2017

// constructor for bank account
function Account(balance, type) {
  var self = this;
  this.balance = balance;
  this.type = type;
  this.debits = 0;
  this.credits = 0;

  this.deposit = function deposit(amount) {
    self.balance += amount;
    self.credits += amount;
  }

  this.withdraw = function withdraw(amount) {
    self.balance -= amount;
    self.credits -= amount;
  }

  this.statement = function statement() {
    console.log("Account Type:", self.type,"\nAccount Balance:", self.balance, "\nAccount Debits:",self.debits,"\nAccount Credits:",self.credits);
  }
}

// constructor for customer
function Customer(initChecking, initSavings) {
  var self = this;
  this.checking = new Account(initChecking, "Checking");
  this.savings = new Account(initSavings, "Savings");

  this.accountOverview = function accountOverview() {
    self.checking.statement();
    self.savings.statement();
  }
}

var customerOne = new Customer(700, 8000);

customerOne.accountOverview();
