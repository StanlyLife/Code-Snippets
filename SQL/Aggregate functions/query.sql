SELECT COUNT(FirstName) FROM Customers;
/*Returns how many rows with a value in firstname*/

SELECT COUNT(FirstName) FROM Customers WHERE State="CA";
/*Returns how many customers with firstname and state is California*/

SELECT SUM(Price) FROM Reservations;
/*Returns the sum of price from the price row in the Reservations table*/

SELECT SUM(Price), AVG(Price), MIN(Price), MAX(Price) FROM Reservations;
/*SUM: Sum of price*/
/*AVG: Average of all prices*/
/*MIN: Smallest number in price row*/
/*MAX: largest number in price row*/