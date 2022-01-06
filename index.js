const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employee'
    }

);
db.connect(() => {
    prompt()
})

const prompt = () => {
    inquirer.prompt([

        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ["View All Employees", "View all Departments", "View all Roles", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role",],
        },
    ])
        .then(promptData => {
            if (promptData.options === "View All Employees") {
                viewAllEmployees()
            }
            else if (promptData.options === "View all Departments") {
                viewAllDepartments()
            }
            else if (promptData.options === "View all Roles") {
                viewRole()
            }
           
        });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        prompt();
    });
}

function viewAllDepartments() {
    db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
        prompt();
    });
}

function viewRole() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        prompt();
    });
}

