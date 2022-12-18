// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Brief description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the project/app do?',
    },
    {
        type: 'list',
        name: 'License',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'The Unlicense',
        ],
        message: 'What license was assigned to project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who helped with the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test were done on the project?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your github username?',
    },
    {
        type: 'email',
        name: 'Email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, _data) {
    // let fileName = 'README.md';
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readME = generateMarkdown(answers);
            if (readME === '') {
                console.log('README.md Issue, please try again.');
            } else {
                fs.writeFile('README.md', readME, (err) =>
                    err ? console.log(err) : console.log('Success! File created README.md')
                );
            };
        });
    //     .catch ((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });
};
// TODO: Create a function to initialize app
function init() {
    console.log('Title, Description, Install, Usage, License, GitHub username and Email ');
    writeToFile();
};
// Function call to initialize app
init();
