/* const{ Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();


async function generateRandomEmail() {
    // Define the base of the email address
const email_base = "testuser{}@example.com";


// Generate a random string of 6 characters
let random_string = '';
const characters = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < 6; i++) {
  random_string += characters.charAt(Math.floor(Math.random() * characters.length));
}


// Concatenate the random string to the email base
const email = email_base.replace('{}', random_string);


console.log(email);


}


generateRandomEmail(); */