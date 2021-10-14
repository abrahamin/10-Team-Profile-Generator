const Manager = require('../lib/Manager');

describe('Manager', () => {
    const name = "Abraham";
    const id = "123";
    const email = "abraham@email.com";
    const office = "321";
    const result = new Manager(name, id, email, office)

    it("should return the name of manager", () => {
        expect(result.getName()).toEqual(name);
    });

    it("should return the id of manager", () => {
        expect(result.getId()).toEqual(id);
    });
    
    it("should return the email of manager", () => {
        expect(result.getEmail()).toEqual(email);
    });
    
    it("should return the office of manager", () => {
        expect(result.getOffice()).toEqual(office);
    });
    
    it("should return the role of manager", () => {
        expect(result.getRole()).toEqual("Manager");
    });
});