// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');
const renderLicenseLink = require('./assets/generateMarkdown');
const fileName = "README.md";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project description',
        name:'projectDescription'
    },
        {
        type: 'checkbox',
        message: 'What languages did use to create this project?',
        name:'languages',
        choices:["HTML", "CSS", "JavaScript", "MySQL"]
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



// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
    inquirer.prompt(questions).then((data) => {
        const readMeContent = generateMarkdown(data);
              //readMeContent += renderLicenseBadge(data);
              console.log(readMeContent);
        //const readMeContent1 = renderLicenseLink(data);
        fs.writeFile(fileName, readMeContent, (err) => err? console.log(err):console.log('Successfully created README.md!'));
        // fs.writeFile(fileName, readMeContent1, (err) => err? console.log(err):console.log('Successfully created README.md!'));
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(fileName, questions);
}

// Function call to initialize app
init();
