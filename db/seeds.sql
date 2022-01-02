INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Marketing'),
  ('Service');

INSERT INTO role (title, salary,department_id)
VALUES
('Sales Rep', 25000, 1),
('Sales Manager', 75000, 1),
('Junior Engineer', 50000, 2),
('Senior Engineer', 125000, 2),
('Junior Accountant', 40000, 3),
('Senior Accountant', 75000, 3),
('Financial Manager', 100000, 3),
('Financial Director', 150000, 3),
('Paralegal', 50000, 4),
('Lawyer', 120000, 4),
('Marketing Manager', 100000, 5),
('Marketing Director', 150000, 5),
('Marketing Specialist', 75000, 5),
('Marketing Assistant', 40000, 5),
('Tech Support', 30000, 6),
('Customer Service', 30000, 6),
('Service Manager', 100000, 6);