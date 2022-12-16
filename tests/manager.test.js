const Manager = require('../lib/manager');

const obj = {name: "Nash", id: "12", email:"nash@emal.cm", officeNumber: "23"}
const person = new Manager(obj)

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
    expect(person.getRole()).toBe("Manager")
    
})

test("testing github method", () => {
    expect(person.getOfficeNumber()).toBe("23")
    
})