CREATE DATABASE tarea3;

CREATE TABLE carrera(
 idCarrera SERIAL NOT NULL PRIMARY KEY,
 carrera VARCHAR(100)
);

INSERT INTO carrera(carrera) VALUES
('Ingeniería en Computación');
INSERT INTO carrera(carrera) VALUES
('Ingeniería Electrónica');
INSERT INTO carrera(carrera) VALUES
('Ingeniería en Producción Industrial');

CREATE TABLE estudiante(
    idEstudiante SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    correoElectronico VARCHAR(50) NOT NULL
);

INSERT INTO estudiante(nombre,apellidos,fechaNacimiento,telefono,correoElectronico) VALUES
('Joao','Gudiño Coward','1997/04/24','12345678','joao@hotmail.com');
INSERT INTO estudiante(nombre,apellidos,fechaNacimiento,telefono,correoElectronico) VALUES
('Kendall','Tenorio Chevez','1997/12/18','87654321','kendall@hotmail.com');
INSERT INTO estudiante(nombre,apellidos,fechaNacimiento,telefono,correoElectronico) VALUES
('Ean','Silva Diaz','1996/03/29','98765433','ean@hotmail.com');

CREATE TABLE citaMatricula(
    idCita SERIAL NOT NULL PRIMARY KEY
    idEstudiante INT NOT NULL,
    idCarrera INT NOT NULL,
    cita TIMESTAMP NOT NULL,
    tiempoSesion INT NOT NULL, -- minutos de la sesion
    FOREIGN KEY (idEstudiante) REFERENCES estudiante(idEstudiante),
    FOREIGN KEY (idCarrera) REFERENCES carrera(idCarrera)
);
INSERT INTO citaMatricula(idEstudiante,idCarrera,cita,tiempoSesion) VALUES
(1,1,'2021/04/19 09:30:00',60);
INSERT INTO citaMatricula(idEstudiante,idCarrera,cita,tiempoSesion) VALUES
(2,2,'2021/04/19 10:00:00',60);
INSERT INTO citaMatricula(idEstudiante,idCarrera,cita,tiempoSesion) VALUES
(3,3,'2021/04/19 10:30:00',60);
