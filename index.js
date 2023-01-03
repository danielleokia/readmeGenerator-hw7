const inquirer = require('inquirer')

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
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
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
        message: 'Project Licensing?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
];

//runQuery function
function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}
runQuery();