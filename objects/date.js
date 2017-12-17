// new date

var now = new Date(); // current date , local timezone
console.log(now);

// month/date/year
var date1 = new Date("6/13/2014");
console.log(date1); //local timezone

//month_name date, year
var date2 = new Date("July 4,2014");
console.log(date2); //local timezone

//day_of_week month_name date year hours:minutes:seconds time_zone 
//(such as Tue May 25 2004 00:00:00 GMT-0700)
var date3 = new Date("Tue May 25 2004 00:00:00 GMT-0700");
console.log(date3); //GMT-0700 

//ISO 8601 extended format YYYY-MM-DDTHH:mm:ss.sssZ 
//(such as 2004-05-25T00:00:00). This works only in ECMAScript 5¨Ccompliant implementations.
var date4 = new Date("2004-05-25T00:00:00");
console.log(date4); //GMT+0000

var date5 = new Date(2000,0);
console.log(date5); //local timezone

var date6 = new Date(2000,1,12,14,46,24);
console.log(date6); //local timezone


