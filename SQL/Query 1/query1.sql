/*Create database*/
CREATE DATABASE Restaurant;

USE Restaurant;


/*Create Table inside Restaurant*/
CREATE TABLE Customers(
    CustomerID INT(6) NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(200) NOT NULL,
    LastName VARCHAR(200) NOT NULL,
    Email VARCHAR(200),
    UsState CHAR(2),
    Phone VARCHAR(20) NOT NULL,
    Birthday DATA,
    FavoriteDish int(6) REFERENCES Dishes(DishID), /*Foreign key*/
    PRIMARY KEY(CustomerID)
)