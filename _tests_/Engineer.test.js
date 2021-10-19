const Engineer = require('../lib/Engineer')

describe("Employee class", () => {
    it("should show the input types of each argument passed from the parent including the new github ", () => {
      const engineer = new Engineer('Christa', 44, 'christa.baccas@gmail.com', 'christa-baccas');
  
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  
    it("should get the engineer role and return `engineer` ", () => {
        const engineer = new Engineer('Christa', 44, 'christa.baccas@gmail.com', 'christa-baccas');
        const result= 'Engineer'
        expect(engineer.getRole()).toEqual(result);
    });

    it("should get the engineers github and return their github username ", () => {
        const engineer = new Engineer('Christa', 44, 'christa.baccas@gmail.com', 'christa-baccas');
        const result= `christa-baccas`
        expect(engineer.getGithub()).toEqual(result);
      });
  });