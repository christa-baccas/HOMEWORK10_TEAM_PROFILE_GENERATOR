const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("should show the input types of each argument passed from the parent including the new officeNumber ", () => {
    const manager = new Manager("Christa", 44, "christa.baccas@gmail.com", 8452719209);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  it("should get the managers role and return `manager` ", () => {
    const manager = new Manager("Christa", 44, "christa.baccas@gmail.com", 8452719209);
    const result= 'Manager'
    expect(manager.getRole()).toEqual(result);
  });
});
