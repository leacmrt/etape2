CREATE USER 'devops'@'localhost' IDENTIFIED BY 'devops';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON *.* TO 'devops'@'localhost';


CREATE DATABASE IF NOT EXISTS `devops` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `devops`;
# Create Table
CREATE TABLE IF NOT EXISTS `students` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `lastName` VARCHAR(255),
  `class` VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO students (name, lastName, class) VALUES ('John', "Clark", "English");
INSERT INTO students (name, lastName, class) VALUES ('Peter', "Johnson","Maths");
    