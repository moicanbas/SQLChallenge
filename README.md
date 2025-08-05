# SQLChallenge
Practica SQL + Javascript + Express
CREATE TABLE users(id_user SERIAL PRIMARY KEY, full_name VARCHAR(255), username VARCHAR(150) UNIQUE NOT NULL, password VARCHAR(255), email VARCHAR(255), id_role )


## QUERY  DE TABLAS CON POSTGRES

CREATE DATABASE tayrona_challenge;
CREATE TABLE role(id_role SERIAL PRIMARY KEY, name VARCHAR(255), codename VARCHAR(150));
CREATE TABLE users(id_user SERIAL PRIMARY KEY, full_name VARCHAR(255) NOT NULL, username VARCHAR(150) UNIQUE NOT NULL, password VARCHAR(255), email VARCHAR(255), id_role INT REFERENCES role("id_role"));
CREATE TABLE status(id_status SERIAL PRIMARY KEY, name VARCHAR(255), codename VARCHAR(150));
CREATE TABLE tasks(id_task SERIAL PRIMARY KEY, name VARCHAR (255), description VARCHAR(255), start_date TIMESTAMP, end_date TIMESTAMP, id_status INT REFERENCES status("id_status"));
CREATE TABLE tasks_users(id_task_user SERIAL PRIMARY KEY, id_user INT REFERENCES users("id_user") , id_task INT REFERENCES tasks("id_task"));





## QUERY DE TABLAS CON MYSQL 


/*mostra base de datos */
show databases;
/* usar base de datos */
use btltffvnrbjlkhuytao0;
 /* borrar tabla */
 drop table role;


/* creacion de tablas */

CREATE TABLE users( id_user  int auto_increment primary key ,
 full_name VARCHAR(255), username VARCHAR(150) UNIQUE NOT NULL,
 id_role int
 , password VARCHAR(255), email VARCHAR(255),
 foreign key (id_role)  references role (id_role) );


CREATE TABLE role(id_role  int auto_increment PRIMARY KEY, name VARCHAR(255),
 codename VARCHAR(150));

CREATE TABLE users(id_user int auto_increment  PRIMARY KEY,
 full_name VARCHAR(255) NOT NULL,
 username VARCHAR(150) UNIQUE NOT NULL,
  id_role int,
 password VARCHAR(255), 
 email VARCHAR(255),
 foreign key (id_role) REFERENCES role(id_role));
 
 /* describir tabla */
 describe users;
 
 
CREATE TABLE status(id_status  int auto_increment PRIMARY KEY,
 name VARCHAR(255), 
 codename VARCHAR(150));
 
 CREATE TABLE tasks(id_task int auto_increment PRIMARY KEY,
 name VARCHAR (255), 
 description VARCHAR(255),
 start_date TIMESTAMP,
 end_date TIMESTAMP,
 id_status int,
foreign key (id_status)  REFERENCES status(id_status));
 

 
CREATE TABLE tasks_users(id_task_user auto_increment PRIMARY KEY,
id_user int ,
id_task int ,
foreign key (id_user ) references  users (id_user) ,
 foreign key (id_task ) references  tasks (id_task));
 /* mostrar tablas */
 show tables;
 
 /*  insertanto  datos en las tablas */
 
 insert into  role (name,codename) values 
 ('Administrador','admin'),
 ('Project manager ','pm'),
 ('Colaborador','co');
 select * from status;
 
  insert into  status (name,codename) values 
 ('ACTIVO','activo'),
 ('EN PROGRESO ','en_progreso'),
 ('COMPLETADA','completada');
 
INSERT INTO users (full_name, username, id_role, password, email) VALUES
('Carlos Pérez', 'cperez', 1, 'clave123', 'cperez@example.com'),
('Ana Gómez', 'agomez', 2, 'pm2025', 'agomez@example.com'),
('Luis Torres', 'ltorres', 3, 'colab01', 'ltorres@example.com'),
('María Ruiz', 'mruiz', 2, 'gestionaPM', 'mruiz@example.com'),
('Javier Méndez', 'jmendez', 3, 'passcolab', 'jmendez@example.com');

select * from users;

INSERT INTO tasks (name, description, start_date, end_date, id_status) VALUES
('Diseñar interfaz', 'Prototipo de la app', '2025-08-01 09:00:00', '2025-08-05 17:00:00', 1),
('Configurar base de datos', 'Crear tablas y relaciones', '2025-08-02 10:00:00', '2025-08-06 16:00:00', 2),
('Implementar login', 'Sistema de autenticación con JWT', '2025-08-03 08:30:00', '2025-08-07 18:00:00', 2),
('Revisión de QA', 'Verificación de funcionalidades', '2025-08-08 09:00:00', '2025-08-10 15:00:00', 1),
('Despliegue en producción', 'Lanzamiento de versión estable', '2025-08-11 13:00:00', '2025-08-11 17:00:00', 3);

INSERT INTO tasks_users (id_user, id_task) VALUES
(1, 1),  
(2, 2),  
(3, 3),  
(4, 4),  
(5, 5), 
(2, 3), 
(3, 2); 



 












 
 