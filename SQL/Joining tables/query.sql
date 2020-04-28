/**/

SELECT FirstName, LastName, FavoriteDish FROM Customers;
/*
This query does not give a lot of information
because FavoriteDish stores DishID and not actual information.

This is done to oblige the normalization rules (up to 3NF)
*/

/*To make the return more readable we'll use join*/
SELECT FirstName,
 LastName,
  FavoriteDish,
   Dishes.`Name`
    FROM Customers
JOIN Dishes ON Customers.FavoriteDish = Dishes.DishId;

/*
This will return the name of the dish (Dishes.`Name`)
that relates to the Customer.FavoriteDish and Dishes.DishID
*/


/*To see if the above staement is true we can add: */
SELECT FirstName,
 LastName,
  FavoriteDish,
   Dishes.DishID, /*this*/
    Dishes.`Name`
     FROM Customers
JOIN Dishes ON Customers.FavoriteDish = Dishes.DishID;

/*
This is useful for tables where only foreign key is used as a reference.
Eg. a table of reservations, you dont know who customerID 8 is,
but by joining tables you can replace CustomerID with Customer.FirstName
*/

SELECT FirstName,
 LastName,
  Reservations.`Date`,
   Reservations.PartySize
FROM Customers
JOIN Reservations ON Reservations.CustomerID = Customers.CustomerID
ORDER BY Reservations.`Date`;