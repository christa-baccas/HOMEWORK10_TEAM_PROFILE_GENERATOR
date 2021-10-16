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
addManager();

// //prompt for Engineer

// //prompt for Intern

const writeFile = () => {
    
}