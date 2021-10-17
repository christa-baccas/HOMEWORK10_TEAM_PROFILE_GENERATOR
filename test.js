const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
       
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
   
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
        
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
      
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])