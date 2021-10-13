const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [
    managerArray = [],
    engineerArray = [],
    internArray = []
];

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
            managerArray.push(newManager);
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
            engineerArray.push(newEngineer);
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
            internArray.push(newIntern);
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
    // for loop to go through array and create a new html based on job title
    let finalCards = "";
    
    for (let i = 0; i < managerArray.length; i++) {
        finalCards += managerCard(managerArray[i]);
    };

    for (let i = 0; i < engineerArray.length; i++) {
        finalCards += engineerCard(engineerArray[i]);
    };

    for (let i = 0; i < internArray.length; i++) {
        finalCards += internCard(internArray[i]);
    };

    console.log(finalCards);
    console.log('HTML rendered!');
};

// html card for manager
function managerCard(data) {
    return `<div class="card bg-primary text-white col-3">
    <div class="card-header bg-primary">
      <p>${data.name}</p>
      <p>Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.office}</li>
    </ul>
    </div>`
}

// html card for engineer
function engineerCard(data) {
    return `<div class="card bg-primary text-white col-3">
    <div class="card-header bg-primary">
      <p>${data.name}</p>
      <p>Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.github}</li>
    </ul>
    </div>`
}

// html card for intern
function internCard(data) {
    return `<div class="card bg-primary text-white col-3">
    <div class="card-header bg-primary">
      <p>${data.name}</p>
      <p>Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.school}</li>
    </ul>
    </div>`
}

managerPrompt();