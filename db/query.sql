--EMPLOYEES BY DEPARTMENT
SELECT
departments.name AS department, roles.title AS title, employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, roles.salary AS salary, employees.manager_id AS manager_id
FROM departments
JOIN roles ON roles.department_id = departments.id
JOIN employees ON employees.role_id = roles.id;

--EMPLOYEES BY MANAGER
SELECT
e.first_name AS Employee, m.first_name AS Manager
FROM employees e
INNER JOIN employees m ON m.id = e.manager_id;


