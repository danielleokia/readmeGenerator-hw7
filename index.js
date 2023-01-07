const inquirer = require('inquirer')
const MarkDown = require('./generateMarkdown')
const fs = require('fs')
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the app used? Give instructions'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['MIT', 'ISC', 'GNUGPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
];

//runQuery function
function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function (error) {
            if(error) {
                console.log('could not save file', error)
            } else {
                console.log('success!')

            }
        })
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}
runQuery();