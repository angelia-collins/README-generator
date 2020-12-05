const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// prompts
const questions = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
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
  type: 'list',
      name: 'license',
      message: 'Which license?',
      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
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
// function writeToFile(title, data) {
//   fs.writeFile(title, data, err => {
//     if (err) {
//       return console.log(err);
//     }
//   });
// }
// function generateMarkdown(data) {
  var markdown = `# ${questions.title}
  Get a unique password based on your specifications.
  
  ## What It Looks Like
  ![password generator](/Assets/password-generator-screencap.png)
  
  ## Check It Out
  [Generate a Password](https://angelia-collins.github.io/PasswordGenerator/)
  
 ©2020"

`;
// }


fs.writeFile('README.md', markdown, (err) => {
  if (err) {
          return console.log(err);
        }
        console.log('readme had been made.')
});
//   `"# Password Generator
//   Get a unique password based on your specifications.
  
//   ## What It Looks Like
//   ![password generator](/Assets/password-generator-screencap.png)
  
//   ## Check It Out
//   [Generate a Password](https://angelia-collins.github.io/PasswordGenerator/)
  
//  ©2020"`
  


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// questions()
// .then(generateMarkdown())

// .then((title, data) => writeFileAsync('README.md', questions(title, data)))
// .then(writeToFile());
// .then(generateMarkdown());
  // .then((title, data) => writeFileAsync('README.md', questions(title, data)))
  // .then(() => console.log('Successfully wrote to index.html'))
  // .catch((err) => console.error(err));;
