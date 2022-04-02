// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'xxx',
        message:'Enter your xxx',
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Sorry, please enter xxx to continue');
                return false
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
