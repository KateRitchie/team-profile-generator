//Import employee parent class
const Employee = require('./employee');

//Extend employee parent class to intern class template
class Intern extends Employee {
    constructor({name, email, id, school}) {
       //Keyword super is used to call the constructor of its parent class (Employee)
      super({name, email, id});

        //School name user input
        this.school = school;

        //Defines engineer role
        this.role = "Intern";
    };

    //Get school method retreives the user input for school
    getSchool() {
        return this.school;
    };

    //Get role method retrieves role name for instance 
    getRole() {
        return this.role;
    };
};

//Export intern class to be used in generating HTML through index.js
module.exports = Intern;