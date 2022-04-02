// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'Enter your title of the repo',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter your title to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message:'Enter your description of the repo',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter the description to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message:'Enter your instructions on installation of your repo',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter installation instructions to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message:'Enter your usage information of the repo',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter the usage information to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message:'Enter your contributing guidelines',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter contributing guidelines to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message:'Enter your test instructions',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter test instructions to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message:'Enter your github username',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter your github username to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'emailaddress',
        message:'Enter your email address',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter your email address to continue');
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message:'Please select a license that you used for the project',
        choices: ['MIT','Apache 2.0','License not listed'],
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please select an answer to continue');
                return false
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        if (err) {
            return console.log('Error:' + err)
        }
        else {
            console.log('Congratulations! Your professional README file has been successfully generated!');
        }
    });
    
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        writeToFile("README.md",generateMarkdown(answer));
    });
};


// Function call to initialize app
init();
