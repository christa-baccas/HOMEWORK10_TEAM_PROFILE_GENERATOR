const Manager = require("../lib/Employee");

describe("Manager class", () => {
  it("should show the input types of each argument passed", () => {
    const manager = new Manager("Christa", 44, "christa.baccas@gmail.com");

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });
});
