CREATE DATABASE business;

CREATE USER 'assist'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON business.* TO 'assist'@'localhost';

USE business;