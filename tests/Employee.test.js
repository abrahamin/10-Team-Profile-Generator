const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("constructor", () => {
        it("should return the name of employee", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";

            const result = new Employee(name, id, email)

            expect(result.getName()).toEqual(name);
        });
        it("should return the id of employee", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";

            const result = new Employee(name, id, email)

            expect(result.getId()).toEqual(id);
        });
        it("should return the email of employee", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";

            const result = new Employee(name, id, email)

            expect(result.getEmail()).toEqual(email);
        });
        it("should return the role of employee", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";

            const result = new Employee(name, id, email)

            expect(result.getRole()).toEqual("Employee");
        });
    });
});