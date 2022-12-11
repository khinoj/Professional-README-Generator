// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Titlename',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Brief description of your project.',
    },
    {
        type: 'input',
        name: 'Install',
        message: 'What are the steps to install.',

    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What does the project/app do?',
    },
    {
        type: 'list',
        name: 'License',
        Choose: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        message: 'What license was assigned to project?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who helped with the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test were done on the project?',
    },
    {
        type: 'input',
        name: 'GitHub username',
        message: 'What is your github username?',
    },
    {
        type: 'email',
        name: 'Email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readME = generateMarkdown(answers);
            if (readME === '') {
                console.log('README.md Issue, please try again.');
            } else {
                fs.writeFile('README.md', readME, (err) =>
                    err ? console.log(err) : console.log('Success! Created a README.md')
                );
            };
        });
};
// TODO: Create a function to initialize app
function init() {
    console.log('Titlename, Description, Install, Usage, License, GitHub username and Email ');
    writeToFile();
};
// Function call to initialize app
init();