ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id int primary key auto_increment,
    burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL DEFAULT 0
);