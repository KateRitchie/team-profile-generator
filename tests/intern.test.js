const Intern = require('../lib/intern');

const obj = {name: "Nash", id: "12", email:"nash@emal.cm", school: "CU"};
const person = new Intern(obj);

//Testing methods and constructors for intern.js
test("testing name", () => {
    expect(person.getName()).toBe("Nash")
    
});

test("testing ID", () => {
    expect(person.id).toBe("12")
    
});

test("testing email", () => {
    expect(person.email).toBe("nash@emal.cm")
    
});

test("testing role method", () => {
    expect(person.getRole()).toBe("Intern")
    
});

test("testing github method", () => {
    expect(person.getSchool()).toBe("CU")
    
});