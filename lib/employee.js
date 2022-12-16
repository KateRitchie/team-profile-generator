// Employee class template
class Employee{
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //GetName method to retrieve user input for name
    getName(){
        return this.name;
    };

    //GetID method to retrieve user input for ID
    getID() {
        return this.id;
    };

    //GetEmail method retrieves user input for email
    getEmail() {
        return this.email;
    };
//TODO: Confused if I need to add the get role (this.role = "employee") or can this not be included here & just created with each role
    getRole() {
        return "employee";
    }
};

//Export employee class to be used in engineer/intern/manager instances
module.exports = Employee 