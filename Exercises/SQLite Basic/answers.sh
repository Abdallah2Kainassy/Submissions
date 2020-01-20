1.select  name from students;
2.select  * from students where age>30 ;
3.select  name from students where age>30 and gender='F';
4.select points from students where ID=1;
5.INSERT INTO students ( Name, Age,Gender,Points)
VALUES ( 'Abdallah',30,'M', 200);
6.UPDATE students
SET Points=350
WHERE ID=2;
7.UPDATE students
SET Points=150
WHERE ID=1;

------------------------------------------------------------------
create table graduates (
 ID  Integer Not Null Primary key autoincrement,
Name varchar(255) Not Null Unique,
Age Integer,
Gender varchar(255),
Points Integer,
Graduation date

)

Creating Table
-------------------------------------------------------------------
1.
INSERT INTO graduates (Name,Age,Gender,Points) VALUES ((SELECT Name FROM students where Name = "Layal"),(SELECT Age FROM students where Name = "Layal"),(SELECT Gender FROM students where Name = "Layal"),(SELECT Points FROM students where Name = "Layal"))

----------------------------------------------------------------
2.
UPDATE graduates SET Graduation = "16-1-2020" WHERE Name = "Layal"
------------------------------------------------------------------
3.
DELETE FROM students
WHERE Name like 'Layal';
------------------------------------------------------------------





Joins
------------------------------------------------------------------
1.
select employees.Name,employees.Company,companies.Date from employees INNER Join companies on employees.Company = companies.Name

------------------------------------------------------------------
2.
select employees.Name from employees INNER Join companies on employees.Company = companies.Name 
where companies.Date <2000
--------------------------------------------------------------------
3.
select employees.Company from employees INNER Join companies on employees.Company = companies.Name 
where Role='Graphic Designer'
----------------------------------------------------------------------

