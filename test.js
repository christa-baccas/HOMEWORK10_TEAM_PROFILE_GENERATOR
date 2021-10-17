const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
     
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
          
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};