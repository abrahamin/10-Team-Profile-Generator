const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe("constructor", () => {
        it("should return the name of engineer", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const github = "321";

            const result = new Engineer(name, id, email, github)

            expect(result.getName()).toEqual(name);
        });
        it("should return the id of engineer", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const github = "321";

            const result = new Engineer(name, id, email, github)

            expect(result.getId()).toEqual(id);
        });
        it("should return the email of engineer", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const github = "321";

            const result = new Engineer(name, id, email, github)

            expect(result.getEmail()).toEqual(email);
        });
        it("should return the github of engineer", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const github = "321";

            const result = new Engineer(name, id, email, github)

            expect(result.getGithub()).toEqual(github);
        });
        it("should return the role of engineer", () => {
            const name = "Abraham";
            const id = "123";
            const email = "abraham@email.com";
            const github = "321";

            const result = new Engineer(name, id, email, github)

            expect(result.getRole()).toEqual("Engineer");
        });
    });
});