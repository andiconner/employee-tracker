InternINSERT INTO departments (`id`, `name`)
VALUES
  (1, 'Sales'),
  (2, 'Engineering'),
  (3, 'Finance'),
  (4, 'Legal'),
  (5, 'Marketing'),
  (6, 'Service');

INSERT INTO roles (`id`, `title`, `salary`, `department_id`)
VALUES
(1, 'Sales Rep', 25000, 1),
(2, 'Sales Manager', 75000, 1),
(3, 'Junior Engineer', 50000, 2),
(4, 'Senior Engineer', 125000, 2),
(5, 'Junior Accountant', 40000, 3),
(6, 'Senior Accountant', 75000, 3),
(7, 'Financial Manager', 100000, 3),
(8, 'Financial Director', 150000, 3),
(9, 'Paralegal', 50000, 4),
(10, 'Lawyer', 120000, 4),
(11, 'Marketing Manager', 100000, 5),
(12, 'Marketing Director', 150000, 5),
(13, 'Marketing Specialist', 75000, 5),
(14, 'Marketing Assistant', 40000, 5),
(15, 'Tech Support', 30000, 6),
(16, 'Customer Service', 30000, 6),
(17, 'Service Manager', 100000, 6);

INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`)
VALUES
(1, 'John', 'Smith', 7),
(2, 'Christina', 'Aguilera', 8),
(3, 'Jeff', 'Johnson', 5),
(4, 'Maria', 'Hernandez', 3),
(5, 'Andy', 'Bowers', 12),
(6, 'Brad', 'McFarland', 11),
(7, 'Mia', 'Brown', 13),
(8, 'Jason', 'Wilson', 14),
(9, 'Joshua', 'Gilbert', 4),
(10, 'Karla', 'Perez', 3),
(11, 'Lisa', 'Bock', 2),
(12, 'Pablo', 'Rulli', 1),
(13, 'Robert', 'Putillo', 1),
(14, 'Rodney', 'Smith', 1),
(15, 'Michelle', 'Williams', 10),
(16, 'Ashley', 'Leddy', 9),
(17, 'Louis', 'McDonald', 17),
(18, 'Jessica', 'Myers', 16),
(19, 'Paul', 'Rosendal', 15),
(20, 'Kyle', 'Goldberg', 15);

UPDATE employees SET manager_id = 2 WHERE id =1;
UPDATE emloyees SET manager_id = 1 WHERE id =3;
UPDATE employees SET manager_id = 9 WHERE id IN (4, 10, 15);
UPDATE employees SET manager_id = 5 WHERE id IN (6, 11);
UPDATE employees SET manager_id = 6 WHERE id IN (7, 8);
UPDATE employees SET manager_id = 11 WHERE id IN (12, 13, 14);
UPDATE employees SET manager_id = 15 WHERE id = 16;
UPDATE employees SET manager_id = 17 WHERE id IN (18, 19, 20);




