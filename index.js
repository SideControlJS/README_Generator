const inquirer = require('inquirer');
const fs = require('fs');



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project: ',
    },

    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please provide a table of contents if needed: ',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation details for the app: ',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Confirm the usage of the app: ',
    },

    {
        type: 'input',
        name: 'License',
        message: 'What license was used for this app?: ',
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'Provide how others can contribute to this app: ',
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'Were any tests conduncted? If so, what tests?: ',
    },
];

//function to initialize the app
function init() {
    inquirer
        .prompt(questions) 
        .then((data) => {
            // Write README file
            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.error(err) : console.log('Successfully generated README.md')
            );
        })
        .catch((error) => {
            console.log('An error occurred:', error);
        });
}

//function call to initialize app
init();