SELECT FirstName, LastName, UsState 
FROM Customers 
WHERE UsState="CA";
/*returns all customers from CA/California*/

SELECT FirstName, LastName, UsState 
FROM Customers 
WHERE UsState="CA"
OR UsState="CO";
/*returns all customers from California and Colorado*/

SELECT FirstName, LastName, UsState 
FROM Customers 
LIKE UsState="C%"
/*returns all customers from states starting with C*/

SELECT * FROM Reservations WHERE 
`Date` > "2019-02-06" 
AND
`Date` < "2019-02-07" 
/*Returns the date from Reservations where date is between set range*/