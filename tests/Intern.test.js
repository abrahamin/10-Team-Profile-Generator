const Intern = require('../lib/Intern');

describe('Intern', () => {
    const name = "Abraham";
    const id = "123";
    const email = "abraham@email.com";
    const school = "GT";
    const result = new Intern(name, id, email, school)

    it("should return the name of intern", () => {
        expect(result.getName()).toEqual(name);
    });
    
    it("should return the id of intern", () => {
        expect(result.getId()).toEqual(id);
    });
    
    it("should return the email of intern", () => {
        expect(result.getEmail()).toEqual(email);
    });
    
    it("should return the school of intern", () => {
        expect(result.getSchool()).toEqual(school);
    });

    it("should return the role of intern", () => {
        expect(result.getRole()).toEqual("Intern");
    });
});