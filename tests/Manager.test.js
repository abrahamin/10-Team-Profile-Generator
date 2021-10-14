const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("constructor", () => {
        it("should return the name of manager", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const office = "321";

            const result = new Manager(name, id, email, office)

            expect(result.getName()).toEqual(name);
        });
        it("should return the id of manager", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const office = "321";

            const result = new Manager(name, id, email, office)

            expect(result.getId()).toEqual(id);
        });
        it("should return the email of manager", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const office = "321";

            const result = new Manager(name, id, email, office)

            expect(result.getEmail()).toEqual(email);
        });
        it("should return the office of manager", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const office = "321";

            const result = new Manager(name, id, email, office)

            expect(result.getOffice()).toEqual(office);
        });
        it("should return the role of manager", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const office = "321";

            const result = new Manager(name, id, email, office)

            expect(result.getRole()).toEqual("Manager");
        });
    });
});