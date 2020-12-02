const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project description?',
  },
  {
    type: 'input',
    name: 'tofc',
    message: 'Table of Contents?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'License?',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions?',
  },
]);

// function to write README file
function writeToFile(fileName, data) {
}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

questions();
