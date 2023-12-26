//your JS code here. If required.
let y;
function daysOfAYear(year){
	if(((year%4==0)&&(year%100!=0))||(year%400==0))
		return 366;
	else
		return 365;
}

console.log(daysOfAYear(y);)