const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the team manager\'s office number?',
    },
    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub?',
    },
    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
    },
    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    },
];

function managerPrompt() {
    inquirer.prompt(managerQuestions)
        .then(function generateManager(data) {
            const newManager = new Manager(data.name, data.id, data.email, data.office);
            teamArray.push(newManager);
            console.log(teamArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                renderHTML();
            }
        })
        .catch((err) => console.error(err))
};

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
        .then(function generateEngineer(data) {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            teamArray.push(newEngineer);
            console.log(teamArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                renderHTML();
            }
        })
        .catch((err) => console.error(err))
};

function internPrompt() {
    inquirer.prompt(internQuestions)
        .then(function generateIntern(data) {
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            teamArray.push(newIntern);
            console.log(teamArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                renderHTML();
            }
        })
        .catch((err) => console.error(err))
};

function renderHTML() {
    console.log('HTML rendered!');
};

managerPrompt();