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
        message: 'What is the title of the project?',
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
        choices:[
                "-[Title](#title)",
                "-[Description](#description)",
                "-[Installation Instructions](#installationInstructions)",
                "-[Usage Information](#usage)",
                "-[Contribution Guidelines](#contribution)",
                "-[Test Instructions](#testInstructions)",
                "-[GitHub Username](#githubUsername)",
                "-[Can be reached at](#email)",
                "-[Laguages](#languages)",
                "-[License](#license)",
                "-[License Link](#licenseLink)",
                "-[License Section](#licenseSection)",
                "-[License Badge](#licenseBadge)",
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
        choices:["HTML", " CSS", " JavaScript", " nodejs"]
    },
    {
        type: 'list',
        message: 'Pick your license',
        name:'license',
        choices: ["The MIT License", "GNU General Public", "Creative Commons Zero", "Mozilla Public License 2.0", "Eclipse Public License 1.0","IBM Public License Version 1.0","ISC License (ISC)", "The Unlicense"],
    },
    {
        type: 'list',
        message: 'What is the license link?',
        name:'licenseLink',
        choices:[
            "[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)<br>", 
            "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)<br>", 
            "[IPL 1.0](https://opensource.org/licenses/IPL-1.0)<br>",
            "[ISC ](https://opensource.org/licenses/ISC)<br>",
            "[MIT ](https://opensource.org/licenses/MIT)<br>",
            "[MPL 2.0](https://opensource.org/licenses/MPL-2.0)<br>", 
            "[EPL 1.0](https://opensource.org/licenses/EPL-1.0)<br>", 
            "[Unlicense ](http://unlicense.org/)<br>"
            ],
    },
    {
        type: 'input',
        message: 'Write the license deatail or section',
        name:'licenseSection'
    },

    {
        type: 'list',
        message: 'Pick your license badge',
        name:'licenseBadge',
        choices: [
            "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", 
             "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
             "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
             "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
             "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
             "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", 
             "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", 
             "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            ],
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
