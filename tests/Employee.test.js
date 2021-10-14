const Employee = require('../lib/Employee');

describe('Employee', () => {
    const name = "Abraham";
    const id = "123";
    const email = "abraham@email.com";
    const result = new Employee(name, id, email)
   
    it("should return the name of employee", () => {
        expect(result.getName()).toEqual(name);
    });

    it("should return the id of employee", () => {
        expect(result.getId()).toEqual(id);
    });
    
    it("should return the email of employee", () => {
        expect(result.getEmail()).toEqual(email);
    });
    
    it("should return the role of employee", () => {
        expect(result.getRole()).toEqual("Employee");
    });
});