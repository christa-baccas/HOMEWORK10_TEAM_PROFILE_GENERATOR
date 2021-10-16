const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

const manager = new Manager("christa", 44, "cbaccas23@gmail.com", "8452719209");
console.log(manager);
console.log(manager.getRole());
