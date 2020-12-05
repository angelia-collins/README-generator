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
      choices: ['© 2020', 'None'],
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
      message: 'Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address?',
    },
  ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      return answers;
    });

const init = async () => {
  answers = await questions();
   var markdown = `# ${answers.title}
    
## Description
${answers.description}

## Table of Contents
${answers.tofc}

## Installation instructions
${answers.install}

## Usage
${answers.usage}

## License Info
${answers.license}

## Contributions
${answers.contributions}

## Test Instructions
${answers.tests}

## Questions?
My Github: https://github.com/${answers.questions} 
My email: ${answers.email}
  
`;
  console.log(markdown);

  fs.writeFile('README.md', markdown, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('readme had been made.')
  });
}
init();