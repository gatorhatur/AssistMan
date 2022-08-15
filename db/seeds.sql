INSERT INTO department (name)     
    VALUES
        ('Shipping and Handling'),
        ('Development'),
        ('Customer Retention'),
        ('Manufacturing');

INSERT INTO role (title,salary,department_id)
    VALUES
        ('Reindeer',17.00,1),
        ('Driver',300.00,1),
        ('Gift Loader', 17.00,1),
        ('Wrapping Associate', 17.50,1),
        ('Gift Designer',45.00,2),
        ('Wrapping Designer',45.00,2),
        ('Design Lead',45.00,2),
        ('Behavioral Consultant',21.23,3),
        ('CR Manager',35.75,3),
        ('Correspondance Associate',17.45,3),
        ('Line Operator',34,4),
        ('Floor Manager',51,4),
        ('QA Engineer',42.34,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
    VALUES
        ('Santa','Claus',2,NULL),
        ('Rudolph','Red-Nose',1,1),
        ('Elvis','Spark',7,1),
        ('Angus','Picksalot',9,1),
        ('Elizabeth','Seesall',12,1),
        ('Dasher','Reindeer',1,2),
        ('Prancer','Lightdeer',1,2),
        ('Sam','Stockwell',3,1),
        ('Gary','Speedster',4,1),
        ('Cherlie','Greatsigner',5,3),
        ('Ian','Spiration',6,3),
        ('Rate','Istner',8,4),
        ('Brad','Istner',8,4),
        ('Carly','Graphy',10,4),
        ('Justine','Thyme',13,5),
        ('Sally','Pronto',11,5),
        ('Shante','Stawp',11,5);

