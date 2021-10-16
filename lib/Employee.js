// Parent class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // gets the members name
    getName () {
        return this.name;
    }
    // get the members id
    getId () {
        return this.id;
    }   
    // gets the memebers email
    getEmail () {
        return this.email;
    }
    // gets the roles of the member
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 
