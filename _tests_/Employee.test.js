// import Employee constructor
const Employee = require('../lib/Employee')

describe("Employee class", () => {
  it("should show the input types of each argument passed", () => {
    const employee = new Employee('Christa', 44, 'christa.baccas@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  it("should get the name of the employee", () => {
    const employee = new Employee('Christa', 44, 'christa.baccas@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
  });

  it("should get the id of the employee", () => {
    const employee = new Employee('Christa', 44, 'christa.baccas@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
  });

  it("should get the email of the employee", () => {
    const employee = new Employee('Christa', 44, 'christa.baccas@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
  });

  it("should get the role of the employee", () =>{
    const employee = new Employee('Christa', 44, 'christa.baccas@gmail.com')

    expect(employee.getRole()).toEqual(expect.any(String))
  })

});