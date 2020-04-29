/*INSERT*/
INSERT INTO Customers(FirstName,LastName,Email,Phone)
VALUES("John", "Doe", "John@Doe.com", "4-8-15-16-23-42")
    /*Inserts John Doe at the bottom of the Customers table*/

/*UPDATE*/
SELECT * FROM Customers WHERE FirstName="John" AND LastName="Doe";
    /*Select and look at customerID*/
UPDATE Customers SET Email = "Doe@John.com" WHERE CustomerID = 1;
    /*Use CustomerID to update Email*/


/*DELETE*/
SELECT * FROM Customers WHERE FirstName="John" AND LastName="Doe";
    /*Select and look at customerID*/
DELETE FROM Customers WHERE CustomerID = "1"