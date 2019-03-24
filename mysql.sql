ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'B3V0XuvG'

CREATE DATABASE IF NOT EXISTS  mydb;

use mydb

CREATE TABLE IF NOT EXISTS bargraph( point int(2) );

INSERT INTO bargraph values(13);
INSERT INTO bargraph values(45);
INSERT INTO bargraph values(23);
INSERT INTO bargraph values(41);
INSERT INTO bargraph values(34);
INSERT INTO bargraph values(54);

CREATE TABLE IF NOT EXISTS  piechart( point int(2) );

INSERT INTO piechart values(25);
INSERT INTO piechart values(35);
INSERT INTO piechart values(40);
