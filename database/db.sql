CREATE DATABASE proyecto_formativo;

USE proyecto_formativo;

---Users table
CREATE TABLE users(
    id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL ,
    username VARCHAR(255) not NULL,
    lastname VARCHAR(255) not NULL,
    country VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    email VARCHAR(255), NOT null,
    password VARCHAR(255), NOT null
);

DESCRIBE users;

---Admin table
CREATE TABLE admin(
    id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL ,
    username VARCHAR(255) not NULL,
    lastname VARCHAR(255) not NULL,
    country VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    email VARCHAR(255), NOT null,
    password VARCHAR(255), NOT null
)

---Links table
CREATE TABLE paquetes (
    id INT(11) PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT null,
    admin_id INT (11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    constraint fk_admin FOREIGN KEY (admin_id) REFERENCES admin(id) 
);