const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

// prompt for manager
const addManager = () => {
    return inquirer.prompt([
    // enter the name of the manager
    {
      type: "input",
      message: "Please enter the name of the manager.",
      name: "name",
    },

    //enter the id of the manager
    {
      type: "input",
      message: "Please enter the ID of the manager",
      name: "id",
    },
    //enter the email of the manager
    {
      type: "input",
      message: "Please enter the email of the manager",
      name: "email",
    },
    //enter the office number of the manager
    {
      type: "input",
      message: "Please enter the office number for the manager",
      name: "number",
    }
  ]).then((ManagerData) => {
    //Push the Manager data into the empty array 
    teamMembers.push(ManagerData);
    console.log(teamMembers)
    });
};

// //prompt for Engineer
const addEmployee = () => {
return inquirer.prompt([
    // select intern or engineer
    {
      type: "list",
      message: "Please select the employees title.",
      name: "title",
      choices: ['Engineer', 'Intern']
    },

    //enter the name of the employee
    {
        type: "input",
        message: "Please enter the name of the employee",
        name: "id",
      },
    //enter the id of the employee
    {
      type: "input",
      message: "Please enter the ID of the employee",
      name: "id",
    },
    //enter the email of the employee
    {
      type: "input",
      message: "Please enter the email of the employee",
      name: "email",
    },
    //enter the github of the employee
    {
      type: "input",
      message: "Please enter the github for the employee",
      name: "number",
    }
  ]).then((EmployeeData) => {
    //Push the engineer and intern data into the empty array 
    teamMembers.push(EmployeeData);
    console.log(teamMembers)
    });
};
// addManager();
addEmployee();

// generates the html page
// const writeFile = (fileName, data, err) => {
//     fs.writeFile('./dis/index.htm', data, err => {
//         err ? console.log(err) : console.log("Html Files Created!")
//       })
// }
// writeFile();