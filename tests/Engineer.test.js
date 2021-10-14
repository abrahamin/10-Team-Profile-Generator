const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const name = "Abraham";
    const id = "123";
    const email = "abraham@email.com";
    const github = "ghacc";
    const result = new Engineer(name, id, email, github)

    it("should return the name of engineer", () => {
        expect(result.getName()).toEqual(name);
    });
    
    it("should return the id of engineer", () => {
        expect(result.getId()).toEqual(id);
    });
    
    it("should return the email of engineer", () => {
        expect(result.getEmail()).toEqual(email);
    });
    
    it("should return the github of engineer", () => {
        expect(result.getGithub()).toEqual(github);
    });
    
    it("should return the role of engineer", () => {
        expect(result.getRole()).toEqual("Engineer");
    });
});