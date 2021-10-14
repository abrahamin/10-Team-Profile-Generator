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
            console.log(managerArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                console.log(teamArray);
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
            console.log(engineerArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                console.log(teamArray);
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
            console.log(internArray);
            if (data.member === 'Engineer') {
                engineerPrompt();
            } else if (data.member === 'Intern') {
                internPrompt();
            } else {
                console.log(teamArray);
                renderHTML();
            }
        })
        .catch((err) => console.error(err))
};

function renderHTML(finalCards) {
    fs.writeFile ('./dist/index.html', writeHTML(finalCards), (err) =>
    err ? console.log(err) : console.log('HTML rendered!'))
}

function writeHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <header class="jumbotron bg-danger text-white text-center">
            <div class="d-inline container">
              <h1 class="display-1">My Team</h1>
            </div>
        </header>
        <main class="container">
            <section class="row justify-content-center">
                ${renderCards()}
            </section>
        </main>
    </body>
    </html>`
}

function renderCards() {
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

    return finalCards;
}

// html card for manager
function managerCard(data) {
    return `
                <div class="card bg-primary text-white col-3">
                    <div class="card-header bg-primary">
                        <p>${data.getName()}</p>
                        <p>${data.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">Office: ${data.getOffice()}</li>
                    </ul>
                </div>
`
}

// html card for engineer
function engineerCard(data) {
    return `
                <div class="card bg-primary text-white col-3">
                    <div class="card-header bg-primary">
                        <p>${data.getName()}</p>
                        <p>${data.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a></li>
                    </ul>
                </div>
`
}

// html card for intern
function internCard(data) {
    return `
                <div class="card bg-primary text-white col-3">
                    <div class="card-header bg-primary">
                        <p>${data.getName()}</p>
                        <p>${data.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">School: ${data.getSchool()}</li>
                    </ul>
                </div>
`
}

managerPrompt();