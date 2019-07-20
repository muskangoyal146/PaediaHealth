window.setTimeout(function(){var today = new Date();
/*var dd = String(today.getDate()).padStart(2, '0');

var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);*/

Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

var dob= new Date(prompt("Enter date of birth of your child (YYYY-MM-DD)"));
var date_of_birth=new Date(dob+'Z');
//document.getElementById("date_of_birth").innerHTML=date_of_birth;
//console.log(dob.toDateString());
console.log( 'Days since ' 
           + date_of_birth.toLocaleDateString() + ': ' 
           + Date.daysBetween(date_of_birth, today));

//printing dob

var dd = String(dob.getDate()).padStart(2, '0');

var mm = String(dob.getMonth()+1).padStart(2, '0'); //January is 0!
var yyyy = dob.getFullYear();

var zero = dd + '/' + mm + '/' + yyyy;
document.getElementById("zero").innerHTML=zero;

//printing one month date


var dd = String(dob.getDate()).padStart(2, '0');

var mm = String(dob.getMonth() + 2).padStart(2, '0'); //January is 0!
var yyyy = dob.getFullYear();

var one = dd + '/' + mm + '/' + yyyy;
document.getElementById("one").innerHTML=one;
//printing two month date

var dd = String(dob.getDate()).padStart(2, '0');

var mm = String(dob.getMonth() + 4).padStart(2, '0'); //January is 0!
var yyyy = dob.getFullYear();

var two = dd + '/' + mm + '/' + yyyy;
document.getElementById("two").innerHTML=two;
//printing 6 month date

var dd = String(dob.getDate()).padStart(2, '0');

var mm = String(dob.getMonth() + 7).padStart(2, '0'); //January is 0!
var yyyy = dob.getFullYear();

var six = dd + '/' + mm + '/' + yyyy;
document.getElementById("six").innerHTML=six;

//printing 12 month date

var dd = String(dob.getDate()).padStart(2, '0');

var mm = String(dob.getMonth()+1).padStart(2, '0'); //January is 0!
var yyyy = dob.getFullYear()+1;

var twelve = dd + '/' + mm + '/' + yyyy;
document.getElementById("twelve").innerHTML=twelve;
















if(Date.daysBetween(date_of_birth,today)>10)
{
	var ans=prompt("Dear user, have you been vaccinated against BCG, Hepatits B and OPV?");
	while(ans.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for BCG, Hep B and OPV. Vaccinate to proceed further");
		var ans=prompt("Dear user, have you been vaccinated against BCG, Hepatits B and OPV?");

	}
}

if(Date.daysBetween(date_of_birth,today)>30)
{
	var ans1=prompt("Dear user, have you received the follow up vaccination against Hep B and OPV?");
	while(ans1.indexOf("yes")===-1)
	{
		alert("Follow up vaccination reminder for Hep B and OPV. Vaccinate to proceed further");
		var ans1=prompt("Dear user, have you received the follow up vaccination against Hep B and OPV?");
	}
}

if(Date.daysBetween(date_of_birth,today)>45)
{
	var ans2=prompt("Dear user, have you received the first dose of D-Tap,PCV and Rotavirus vaccination?");
	while(ans2.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for first dose of D-Tap, PCV and Rotavirus vaccines. Vaccinate to proceed further");
		var ans2=prompt("Dear user, have you received the first dose of D-Tap, PCV and Rotavirus vaccination?");
		
	}
}

if(Date.daysBetween(date_of_birth,today)>90)
{
	var ans3=prompt("Dear user, have you received the second dose of D-Tap,PCV and Rotavirus vaccination?");
	while(ans3.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for second dose of D-Tap, PCV and Rotavirus vaccines. Vaccinate to proceed further");
		var ans3=prompt("Dear user, have you received the second dose of D-Tap, PCV and Rotavirus vaccination?");
		
	}
}

if(Date.daysBetween(date_of_birth,today)>135)
{
	var ans4=prompt("Dear user, have you received the third and final dose of D-Tap,PCV and Rotavirus vaccination?");
	while(ans4.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for third dose of D-Tap, PCV and Rotavirus vaccines. Vaccinate to proceed further");
		var ans4=prompt("Dear user, have you received the third and final dose of D-Tap, PCV and Rotavirus vaccination?");
		
	}
}

if(Date.daysBetween(date_of_birth,today)>180)
{
	var ans5=prompt("Dear user, have you received MMR boosters?");
	while(ans5.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for anti-measles and anti flu MMR vaccines. Vaccinate to proceed further");
		var ans5=prompt("Dear user, have you received MMR boosters?");
		
	}
}

if(Date.daysBetween(date_of_birth,today)>270)
{
	var ans6=prompt("Dear user, have you received Typhoid TCV vaccine?");
	while(ans6.indexOf("yes")===-1)
	{
		alert("Vaccination reminder for Typhoid TCV vaccine. Vaccinate to proceed further");
		var ans6=prompt("Dear user, have you received Typhoid TCV vaccine?");
		
	}
}

alert("Congratulations user, your infant has been successfully vaccinated for the first year of his/her life. We encourage you to spread the message of the importance of vaccination among other young parents. We hope your experience with PaediaHealth was satisfactory.")
},1000);
