const fs = require("fs");
const inquirer = require("inquirer");

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const teamMemberList = [];

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
  ]).then((managerData) => {    
    const name = managerData.name
    const id = managerData.id
    const email = managerData.email
    const officeNumber = managerData.number

    const manager = new Manager (name, id, email, officeNumber)

    //Push the Manager data into the empty array 
    teamMemberList.push(manager)
    console.log(teamMemberList)
    });
};
addManager();
// //prompt for Engineer
// const addEmployee = () => {
// return inquirer.prompt([
//     // select intern or engineer
//     {
//       type: "list",
//       message: "Please select the employees title.",
//       name: "title",
//       choices: ['Engineer', 'Intern']
//     },

//     //enter the name of the employee
//     {
//         type: "input",
//         message: "Please enter the name of the employee",
//         name: "name",
//       },
//     //enter the id of the employee
//     {
//       type: "input",
//       message: "Please enter the ID of the employee",
//       name: "id",
//     },
//     //enter the email of the employee
//     {
//       type: "input",
//       message: "Please enter the email of the employee",
//       name: "email",
//     },
//     //enter the github of the engineer
//     {
//       type: "input",
//       message: "Please enter the github for the employee",
//       name: "github",
//       when: (input) => input.title === 'Engineer'
//     },
//     //enter the school of the intern
//     {
//         type: "input",
//         message: "Please enter the name of the school the intern attends.",
//         name: "school",
//         when: (input) => input.title === 'Intern'
//     },
//     // would you like to add another employee
//     {
//         type: "list",
//         message: "Would you like to add another employee?",
//         name: "defualt",
//         choices:['yes', 'no'],
//         default:false
//     }
//   ]);
// };
// addManager()
// .then((EmployeeData) => {
//     addEmployee();
//     //Push the engineer and intern data into the empty array 
//     teamMembers.push(EmployeeData);
// });

//generates the html page
// const writeFile = (data) => {
//     fs.writeFile('./dist/index.html', data, err => {
//         err ? console.log(err): console.log('HTML Generated!')
//     })
// }; 
// writeFile();

// init to run function
