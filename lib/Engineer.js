const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getRole(){
        return 'Engineer';
    }

    getGithub() {
        return `https://github.com/${this.github}`;
    }
}

const engineer = new Engineer('Christa', 44, 'christa.baccas@gmail.com', 'christa-baccas')
console.log(engineer)
console.log(engineer.getGithub())
module.exports = Engineer