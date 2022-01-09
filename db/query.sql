--EMPLOYEES BY DEPARTMENT
SELECT
departments.name AS department, roles.title AS title, employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, roles.salary AS salary, employees.manager_id AS manager_id
FROM departments
JOIN roles ON roles.department_id = departments.id
JOIN employees ON employees.role_id = roles.id;

--EMPLOYEES BY MANAGER
SELECT
employees.manager_id AS manager, departments.name AS department, roles.title AS title, employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, roles.salary AS salary
FROM departments
JOIN roles ON roles.department_id = departments.id
JOIN employees ON employees.role_id = roles.id;
