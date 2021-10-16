const Intern = require('../lib/Intern');

describe("Intern Class", () =>{
    it("should show the input types of each argument passed from the parent including the new school ", () => {
        const intern = new Intern('Christa', 44, 'christa.baccas@gmail.com', 'UT Austin');
    
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
      });
    
      it("should get the inter role and return `intern` ", () => {
          const intern = new Intern('Christa', 44, 'christa.baccas@gmail.com', 'UT Austin');
          const result= 'Intern'
          expect(intern.getRole()).toEqual(result);
      });
  
      it("should get the intern school and return their school name ", () => {
          const intern = new Intern('Christa', 44, 'christa.baccas@gmail.com', 'UT Austin');
          const result= `UT Austin`
          expect(intern.getSchool()).toEqual(result);
        });
})