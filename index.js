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
            choices: ["View All Employees", "View all Departments", "View all Roles", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role","Update an Employee Manager","DELETE Employees","DELETE Roles", "DELETE Departments",],
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
            else if (promptData.options === "Update an Employee Role") {
                updateEmployeeRole()
            }
            else if (promptData.options === "Update an Employee Manager") {
                updateEmployeeManager()
            }
            else if (promptData.options === "DELETE Employees") {
                deleteEmployees()
            }
            else if (promptData.options === "DELETE Roles") {
                deleteRoles()
            }
            else if (promptData.options === "DELETE Departments") {
                deleteDepartments()
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

function updateEmployeeRole(){
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the employee ID you want to update?',
        name: 'employeeID'
        },
        {
        type: 'input',
        message: 'What is the NEW ROLE id?',
        name: 'updateRole'
        }
    ])
    .then(response =>{
        const params = [response.updateRole, response.employeeID]
        db.query('UPDATE employees SET role_id = ? WHERE id = ?',params,(err, results)=>{
        viewAllEmployees()
        });
    })
}

function updateEmployeeManager(){
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the employee ID you want to update?',
        name: 'employeeID'
        },
        {
        type: 'input',
        message: 'What is the NEW Manager id?',
        name: 'updateManager'
        }
    ])
    .then(response =>{
        const params = [response.updateManager, response.employeeID]
        db.query('UPDATE employees SET manager_id = ? WHERE id = ?',params,(err, results)=>{
        viewAllEmployees()
        });
    })
}

function deleteEmployees(){
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the employee ID you want to delete?',
        name: 'employeeID'
        },
    ])
    .then(response =>{
        const params = [response.employeeID]
        db.query('DELETE FROM employees WHERE id = ?',params,(err, results)=>{
        viewAllEmployees()
        });
    })
}

function deleteRoles(){
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the role ID you want to delete?',
        name: 'roleID'
        },
    ])
    .then(response =>{
        const params = [response.roleID]
        db.query('DELETE FROM roles WHERE id = ?',params,(err, results)=>{
        viewRole()
        });
    })
}

function deleteDepartments(){
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the department ID you want to delete?',
        name: 'departmentID'
        },
    ])
    .then(response =>{
        const params = [response.departmentID]
        db.query('DELETE FROM departments WHERE id = ?',params,(err, results)=>{
        viewAllDepartments()
        });
    })
}



