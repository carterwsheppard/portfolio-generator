//pull in modules
const fs = require('fs');
const http = require('http');
const url = require('url');
const generatePage = require('./src/generate-page.js');
//get info from command line following the node and application commands
const profileDataArgs = process.argv.slice(2);

//destructure the info to get usable variables
const [name, github] = profileDataArgs;

//Function to create HTML string based on name and github username
//const generatePage = require('./src/generate-page.js');

//Take the above function and use it to generate an HTML file --> If error let me know otherwise let me know when job is done
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout index.html to see the output!')
})