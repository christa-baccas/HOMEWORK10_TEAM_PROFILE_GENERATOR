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
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.number
      );
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
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((data) => {
      //if statment checking what question prompt should run (engineer or intern or none at all)
      switch (data.title) {
        case "Engineer":
          return addEngineer();
          break;
        case "Intern":
          return addIntern();
          break;
        case "Exit":
        // console.log(generateHTML())
        // renderEmployees(teamMemberList);
        generateHTML();
          break;
        default:
          console.log(`HTML page generated with team members!`);
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
      },

    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      teamMemberList.push(engineer);
      addEmployee();
      //console.log(teamMemberList);
    });
};

//Prompt questions for Intern
const addIntern = () => {
  return inquirer
    .prompt([
      //enter the name of the intern
      {
        type: "input",
        message: "Please enter the name of the intern",
        name: "name",
      },
      //enter the id of the intern
      {
        type: "input",
        message: "Please enter the ID of the intern",
        name: "id",
      },
      //enter the email of the intern
      {
        type: "input",
        message: "Please enter the email of the intern",
        name: "email",
      },
      //enter the school of the intern
      {
        type: "input",
        message: "Please enter the name of the school the intern attends.",
        name: "school",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      teamMemberList.push(intern);
      addEmployee();
    });
};

// //generates the html page
const generateHTML = () => {
   const pageData =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title> Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team Profile</h1>
        </header>
        ${renderEmployees(teamMemberList)}
    </body>
    </html>`
    fs.writeFile('./dis/index.html',pageData, err => {
        err ? console.log(err): console.log('file written')
    })
};

const renderEmployees = (team) => { 
    return team.map(emp => {
        // console.log(emp.getRole());
        switch (emp.getRole()) {
            case 'Engineer':
                return `<div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${emp.getName()}</h5>
                      <h5 class="card-title">${emp.getRole()}</h5>
                      <p class="card-text">${emp.getEmail()}</p>
                      <p class="card-text">${emp.getId()}</p>
                      <p class="card-text">${emp.getGithub()}</p>
                    </div>
                  </div>
                </div>`
            case'Intern':
            return `<div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${emp.getName()}</h5>
                      <h5 class="card-title">${emp.getRole()}</h5>
                      <p class="card-text">${emp.getEmail()}</p>
                      <p class="card-text">${emp.getId()}</p>
                      <p class="card-text">${emp.getSchool()}</p>
                    </div>
                  </div>
                </div>`
            case'Manager':
            return `<div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${emp.getName()}</h5>
                  <h5 class="card-title">${emp.getRole()}</h5>
                  <p class="card-text">${emp.getEmail()}</p>
                  <p class="card-text">${emp.getId()}</p>
                  <p class="card-text">${emp.getOfficeNumber()}</p>
                </div>
              </div>
            </div>`
            default: console.log('Error, getRole gave unexpected value')
            return '';
        }
    }).join('')
}

//fucntion that return html for each employee 
//or
//create a let outisde





// //add team member to html page
// const addMembersInfo = new promise((resolve, reject) =>{
//     const memberRole = getRole();
//     if (memberRole === 'manager'){
//         resolve('manager')
//     }else if(memberRole === 'Engineer'){
//         resolve('engineer')
//     }else if(memberRole === 'Intern'){
//         resolve('intern')
//     }else{
//         reject('error');
//     }
//     addMembersInfo.then((log) => {
//         console.log(log);
//     }).catch(() =>{
//         console.log(log);
//     })
// })

