const fs = require("fs");
const inquirer = require("inquirer");

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMemberList = [];

// prompt for manager
const addManager = () => {
  return inquirer
    .prompt([
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
      },
    ]).then((managerData) => {
      const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.number);
      //Push the data into the empty array
      teamMemberList.push(manager);

      addEmployee(); // prompt asking if youd like to add an engineer or intern

    });
};
addManager();

// prompt question to add an employee (engineer or intern)
const addEmployee = () => {
    return inquirer
      .prompt([
        // select intern or engineer
        {
          type: "list",
          message: "Please select the employees title.",
          name: "title",
          choices: ['Engineer', 'Intern'],
        }
      ]).then((data) => {
            //if statment checking what question prompt should run (engineer or intern or none at all)
            switch (data.title) {
                case 'Engineer': return addEngineer();
                    break;
                case 'Intern': return addIntern();
                    break;
                default: console.log(`HTML page generated with team members!`)
                    break;
            }
        });
    };

//prompt questuons for Engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      //enter the name of the engineer
      {
        type: "input",
        message: "Please enter the name of the engineer",
        name: "name",
      },
      //enter the id of the engineer
      {
        type: "input",
        message: "Please enter the ID of the engineer",
        name: "id",
      },
      //enter the email of the engineer
      {
        type: "input",
        message: "Please enter the email of the engineer",
        name: "email",
      },
      //enter the github of the engineer
      {
        type: "input",
        message: "Please enter the github for the engineer",
        name: "github",
        when: (input) => input.title === 'Engineeer',
      },
    ]);
};

//Prompt questions for Intern
    const addIntern = () => {
        return inquirer
          .prompt([

            //enter the name of the employee
            {
              type: "input",
              message: "Please enter the name of the employee",
              name: "name",
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
            //enter the school of the intern
            {
              type: "input",
              message: "Please enter the name of the school the intern attends.",
              name: "school",
            },
            // would you like to add another employee
            {
              type: "confirm",
              message: "Would you like to add another employee?",
              name: "again",
              default: false
            }
          ])
        }
// //     .then((engineerData, internData) => {
//       addEmployee();

//       const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
//       const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

//       //Push the Manager data into the empty array
//       teamMemberList.push(engineer, intern);
//       //teamMemberList.push(internData)
//       console.log(teamMemberList);
//     });
// };

// const askQuestionsAgain = (response) => {
//     if(response.again === 'yes'){
//         return addEmployee();
//     }else{
//         return false;
//     }
// }


// //generates the html page
// const writeFile = (data) => {
//     fs.writeFile('./dist/index.html', data, err => {
//         err ? console.log(err): console.log('HTML Generated!')
//     })
// };
// writeFile();

// //init to run function
