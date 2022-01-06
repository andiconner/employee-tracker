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
            else if (promptData.options === "Add a Department") {
                addDepartment()
            }
            else if (promptData.options === "Add a Role") {
                addRole()
            }
            else if (promptData.options === "Add an Employee") {
                addEmployee()
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
function addDepartment () {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the New Department name?',
        name: 'departmentName'
    }])
    .then(response =>{
        const params = [response.departmentName]
        db.query('INSERT INTO departments (name) VALUES (?)',params,(err, results)=>{
        viewAllDepartments()
        });
    })
}

function addRole () {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Please enter the TITLE',
        name: 'title'
        },
        {
        type: 'input',
        message: 'Please enter the SALARY for this role',
        name: 'salary'
        },
        {
        type: 'input',
        message: 'Please enter the DEPARTMENT ID',
        name: 'departmentId'
        }
    ])
    .then(response =>{
        const params = [response.title, response.salary, response.departmentId]
        db.query('INSERT INTO roles (title, salary, department_id) VALUES ( ?, ?, ?)',params,(err, results)=>{
        viewRole()
        });
    })
}

function addEmployee () {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Please enter the employee FIRST NAME',
        name: 'firstName'
        },
        {
        type: 'input',
        message: 'Please enter the employee LAST NAME',
        name: 'lastName'
        },
        {
        type: 'input',
        message: 'Please enter the employee ROLE ID',
        name: 'roleId'
        },
        {
        type: 'input',
        message: 'Please enter the employee MANAGER ID',
        name: 'managerId'
        }
    ])
    .then(response =>{
        const params = [response.firstName, response.lastName, response.roleId, response.managerId]
        db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ( ?, ?, ?, ?)',params,(err, results)=>{
        viewAllEmployees()
        });
    })
}



