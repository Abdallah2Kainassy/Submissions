"SELECT  name FROM students;"
"SELECT  * FROM students WHERE age>30; 
"SELECT  name FROM students WHERE age>30 and gender='F';"
"SELECT points FROM students WHERE ID=1;"
"INSERT INTO students ( Name, Age,Gender,Points)VALUES ( 'Abdallah',30,'M', 200);"
"UPDATE students SET Points=350 WHERE ID=2;"
"UPDATE students SET Points=150 WHERE ID=1;"
"create table graduates ( 
ID  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name VARCHAR(255) NOT NULL UNIQUE,
Age INTEGER,
Gender VARCHAR(255),
Points INTEGER,
Graduation DATE

);"


"INSERT INTO graduates (Name,Age,Gender,Points) VALUES (
    (SELECT Name FROM students WHERE Name = "Layal"),
    (SELECT Age FROM students WHERE Name = "Layal"),
    (SELECT Gender FROM students WHERE Name = "Layal"),
    (SELECT Points FROM students WHERE Name = "Layal"));"


"UPDATE graduates SET Graduation = "16-1-2020" WHERE Name = "Layal";"

"DELETE FROM students WHERE Name LIKE 'Layal';""





"SELECT employees.Name,employees.Company,companies.Date FROM employees INNER JOIN companies ON employees.Company = companies.Name;"


"SELECT employees.Name FROM employees INNER JOIN companies ON employees.Company = companies.Name WHERE companies.Date <2000;"

" SELECT employees.Company FROM employees INNER JOIN companies ON employees.Company = companies.Name  WHERE Role='Graphic Designer';"

" SELECT Name FROM students ORDER BY Points DESC LIMIT 1;"

" SELECT AVG(Points) From students;"

"SELECT count(Name) FROM students  WHERE Points = 500;"

"SELECT Name FROM students WHERE Name LIKE'%s%' ;"

"SELECT Name FROM students ORDER BY Points DESC;"

