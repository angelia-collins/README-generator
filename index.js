const inquirer = require('inquirer');
const fs = require('fs');

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
  ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      return answers;
    });



// var markdown =
//   `# ${questions.title}
//   Get a unique password based on your specifications.

//   ## What It Looks Like
//   ![password generator](/Assets/password-generator-screencap.png)

//   ## Check It Out
//   [Generate a Password](https://angelia-collins.github.io/PasswordGenerator/)

//  ©2020

// `;

const init = async () => {
  answers = await questions();
   var markdown = `# ${answers.title}
  Get a unique password based on your specifications.
    
## What It Looks Like
![password generator](/Assets/password-generator-screencap.png)
    
## Check It Out
[Generate a Password](https://angelia-collins.github.io/PasswordGenerator/)
    
©2020
  
`;
  // await questions();
  console.log(markdown);

  fs.writeFile('README.md', markdown, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('readme had been made.')
  });
}
init();
// console.log(`${questions.title}`);
