// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is you email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'projectName'
  },
  {
    type: 'input',
    message: 'Please write a short description for your project: ',
    name: 'description'
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
    default: 'npm test'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribution'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // use generateMarkdown functions
  writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
