
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

// EXERCISE 12
// Return an array of all deposits greater than 100
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data.js";

export function getAllDepositsGreaterThanOneHundred(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];


    if (account.deposits && account.deposits.length > 0) {
      for (let j = 0; j < account.deposits.length; j++) {
        if (account.deposits[j] > 100) {
          result.push(account.deposits[j]);
        }
      }
    }
  }

  return result;
}

console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
