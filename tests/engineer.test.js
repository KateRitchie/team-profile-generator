const Engineer = require('../lib/engineer');

const obj = {name: "Nash", id: "12", email:"nash@emal.cm", github: "nash123"}
const person = new Engineer(obj)

//Testing methods and constructors for engineer.js
test("testing name", () => {
    expect(person.getName()).toBe("Nash")
    
})

test("testing ID", () => {
    expect(person.id).toBe("12")
    
})

test("testing email", () => {
    expect(person.email).toBe("nash@emal.cm")
    
})

test("testing role method", () => {
    expect(person.getRole()).toBe("Engineer")
    
})

test("testing github method", () => {
    expect(person.getGithub()).toBe("nash123")
    
})