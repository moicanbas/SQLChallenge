# SQLChallenge
Practica SQL + Javascript + Express
CREATE TABLE users(id_user SERIAL PRIMARY KEY, full_name VARCHAR(255), username VARCHAR(150) UNIQUE NOT NULL, password VARCHAR(255), email VARCHAR(255), id_role )

CREATE DATABASE tayrona_challenge;
CREATE TABLE role(id_role SERIAL PRIMARY KEY, name VARCHAR(255), codename VARCHAR(150));
CREATE TABLE users(id_user SERIAL PRIMARY KEY, full_name VARCHAR(255) NOT NULL, username VARCHAR(150) UNIQUE NOT NULL, password VARCHAR(255), email VARCHAR(255), id_role INT REFERENCES role("id_role"));
CREATE TABLE status(id_status SERIAL PRIMARY KEY, name VARCHAR(255), codename VARCHAR(150));
CREATE TABLE tasks(id_task SERIAL PRIMARY KEY, name VARCHAR (255), description VARCHAR(255), start_date TIMESTAMP, end_date TIMESTAMP, id_status INT REFERENCES status("id_status"));
CREATE TABLE tasks_users(id_task_user SERIAL PRIMARY KEY, id_user INT REFERENCES users("id_user") , id_task INT REFERENCES tasks("id_task"));