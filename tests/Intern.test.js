const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("constructor", () => {
        it("should return the name of intern", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const school = "GT";

            const result = new Intern(name, id, email, school)

            expect(result.getName()).toEqual(name);
        });
        it("should return the id of intern", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const school = "GT";

            const result = new Intern(name, id, email, school)

            expect(result.getId()).toEqual(id);
        });
        it("should return the email of intern", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const school = "GT";

            const result = new Intern(name, id, email, school)

            expect(result.getEmail()).toEqual(email);
        });
        it("should return the school of intern", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const school = "GT";

            const result = new Intern(name, id, email, school)

            expect(result.getSchool()).toEqual(school);
        });
        it("should return the role of intern", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const school = "GT";

            const result = new Intern(name, id, email, school)

            expect(result.getRole()).toEqual("Intern");
        });
    });
});