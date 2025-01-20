// index.js

const readline = require('readline');

// Create an interface to take input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fixed exchange rate for INR to USD
const exchangeRate = 0.012; // 1 INR = 0.012 USD

// Function to convert INR to USD
function convertInrToUsd(inr) {
  return inr * exchangeRate;
}

// Function to convert USD to INR
function convertUsdToInr(usd) {
  return usd / exchangeRate;
}

// Function to prompt the user for input
function promptUser() {
  rl.question('Enter conversion type (INR to USD or USD to INR), or type "exit" to quit: ', (conversionType) => {
    if (conversionType.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    rl.question('Enter the amount: ', (amount) => {
      amount = parseFloat(amount);

      if (isNaN(amount)) {
        console.log('Please enter a valid number.');
        promptUser(); // Prompt again if the input is not a number
        return;
      }

      if (conversionType.toLowerCase() === 'inr to usd') {
        const result = convertInrToUsd(amount);
        console.log(`${amount} INR is equal to ${result.toFixed(2)} USD.`);
      } else if (conversionType.toLowerCase() === 'usd to inr') {
        const result = convertUsdToInr(amount);
        console.log(`${amount} USD is equal to ${result.toFixed(2)} INR.`);
      } else {
        console.log('Invalid conversion type. Please use "INR to USD" or "USD to INR".');
      }

      promptUser(); // Prompt again after completing one conversion
    });
  });
}

// Start the prompt
promptUser();