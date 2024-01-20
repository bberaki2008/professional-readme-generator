// Import packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');
const renderLicenseLink = require('./assets/generateMarkdown');
const fileName = "README.md";


//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project description',
        name:'description'
    },
    {
        type: 'checkbox',
        message: 'Table of Contents',
        name:'tableContents',
        choices:["title", "description", "installationInstructions", "usage",
                "license","contribution", "testInstructions", "githubUsername",
                "email", "languages", "licenseLink", "licenseSection", "licenseBadge"
                ]
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name:'installationInstructions'
    },
    {
        type: 'input',
        message: 'Usage Information',
        name:'usage'
    },
    {
        type: 'input',
        message: 'License',
        name:'license'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name:'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name:'testInstructions'
    },

    {
        type: 'input',
        message: 'What is your github username',
        name:'githubUsername'
    },
    {
        type: 'input',
        message: 'How to reach me with additional questions? OR email-address',
        name:'email'
    },  
    {
        type: 'checkbox',
        message: 'What languages did use to create this project?',
        name:'languages',
        choices:["HTML", "CSS", "JavaScript", "nodejs"]
    },
    {
        type: 'input',
        message: 'What is the license link?',
        name:'licenseLink'
    },
    {
        type: 'input',
        message: 'Write the license section',
        name:'licenseSection'
    },

    {
        type: 'list',
        message: 'Pick your license',
        name:'licenseBadge',
        choices: ["MIT", "Apache License 2.0", "GNU General Public", "Boost Software license", "Creative Commons Zero", "Mozilla Public License", "Eclipse Publice License", "The Unlicense"],
    },

];



// Creates a function to write README file
function writeToFile(fileName, questions) {
    inquirer.prompt(questions).then((data) => {
        const readMeContent = generateMarkdown(data);
        fs.writeFile(fileName, readMeContent, (err) => err? console.log(err):console.log('Successfully created README.md!'));
    })
}

//Creates a function to initialize app
function init() {
    writeToFile(fileName, questions);
}

// Function call to initialize app
init();
