//Import employee parent class
const Employee = require('./employee');

//Extend employee parent class to manager class template
class Manager extends Employee {
    constructor({name, email, id, officeNumber}) {
       //Keyword super is used to call the constructor of its parent class (Employee)
      super({name, email, id});

        //School name user input
        this.officeNumber = officeNumber;

        //Defines engineer role
        this.role = "Manager";
    };

    //Get Office Number method retreives the user input for office number
    getOfficeNumber() {
        return this.officeNumber;
    };

    //Get role method retrieves role name for instance 
    getRole() {
        return this.role;
    };
};

//Export intern class to be used in generating HTML through index.js
module.exports = Manager;