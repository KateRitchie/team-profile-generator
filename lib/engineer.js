//Import employee parent class
const Employee = require('./employee');

//Extend employee parent class to engineer class template
class Engineer extends Employee {
    constructor({name, email, id, github}) {
       //Keyword super is used to call the constructor of its parent class (Employee)
      super({name, email, id});

        //GitHub user input
        this.github = github;

        //Defines engineer role
        this.role = "Engineer";
    };

    //Get GitHub method retreives the user input for GitHub
    getGithub() {
        return this.github;
    };

    //Get role method retrieves role name for instance
    getRole() {
        return this.role;
    };
};

//Export engineer class to be used in generating HTML through index.js
module.exports = Engineer;