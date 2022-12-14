// Packages needed for application
const fs = require('fs');

//HTML variable
let html = '';

//HTML header
let header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>My Team</title>   
</head>
<body>
    <header class="p-5 mb-4 header bg-success">
        <h1 class="text-center text-light">My Team</h1>
    </header>
    <div class="container text-center">
    <div class="row row-cols-1 row-cols-md-3 g-4">`;

//HTML footer
let footer = `
</div>
</div>
<script src="../index.js"></script>
</body>
</html>`;

//Function to create HTML file
const generateMarkdown = (team) => {
    team.forEach(element => {
        let name = element.name;
        let id = element.id;
        let email  = element.email;
        let role = element.getRole();
        let special = ''

        if(role === 'Manager') {
            officeNumber = element.getOfficeNumber();
            special = `Office number: ${officeNumber}`;
        } else if (role === 'Engineer') {
            github = element.getGithub();
            special = `GitHub: ${github}<a href="https://github.com/${github}"></a>`;
        } else if (role === 'Intern') {
            school = element.getSchool();
            special = `School: ${school}`;
        }
    let card = 
    `<div class="col-md-3">    
    <div class="card text-center">
        <div class="card-header bg-secondary">
            <h2 id="name">${role}</h2>
            ${name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id} </li>
          <li class="list-group-item">Email: <a href=${email}></a>${email}</li>
          <li class="list-group-item">${special}</li>
        </ul>
      </div>
    </div>` 
    
   html = header += card;
})
html += footer

//new HTML file created
 fs.writeFile('./dist/index.html', html, (err) => {
        if (err) {
            console.log("Could not create file")
        } else {
            console.log("HTML file sucessfully created")
        }
    })

}


module.exports = generateMarkdown;