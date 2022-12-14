// Packages needed for application
const {prompt} = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

//Class imports
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//Array needed for answers to questions
const team = [];
let completeTeam = false;

//Array of questions for user input
const init = async() => {
    await makeManager();
    while (!completeTeam) {
    //Question for manager to create team
    const EQuestion = [
        {
            type: "list",
            name: "role",
            message: "Select employee role to add to your team",
            choices: ["Engineer", "Intern", "None"],
        },
    ]

//Employee role object
 const {role} = await prompt(EQuestion);

//If none selected, only manager will be in team
if(role === "None") {
    completeTeam = true;
    generateMarkdown(team)
} else {
//If Engineer or Intern selected, their respective questions will run
if (role === "Engineer") {
    await makeEngineer();
}
if(role === "Intern") {
    await makeIntern();
  }
 }
 console.log(team)
}
};

//Make manager profile function
const makeManager = async() => {
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter manager name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager ID"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number"
        }
    ]

    //Generation of manager question input
    const managerAnswers = await prompt(managerQuestions);

    //New instance of manager class
    const manager = new Manager(managerAnswers)

    //Push manager object into team array
    team.push(manager)
};

//Make engineer profile function
const makeEngineer = async() => {
    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter engineer name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer ID"
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's github user name"
        }
    ]

    //Generation of engineer question input
    const engineerAnswers = await prompt(engineerQuestions);

    //New instance of manager class
    const engineer = new Engineer(engineerAnswers)

    //Push manager object into team array
    team.push(engineer)
};

//Make intern profile function
const makeIntern = async() => {
    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter intern name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern ID"
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school's name"
        }
    ]

    //Generation of intern question input
    const internAnswers = await prompt(internQuestions);

    //New instance of manager class
    const intern = new Intern (internAnswers)

    //Push manager object into team array
    team.push(intern)

};

init()






