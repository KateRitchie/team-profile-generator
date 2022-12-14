const Employee = require('../lib/employee');

const obj = {name: "Nash", id: "12", email:"nash@emal.cm"}
const person = new Employee(obj)

//Create a function "test" & add in 2 parameters
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
    expect(person.getRole()).toBe("employee")
    
})