//your JS code here. If required.
let year=parseInt(prompt("Eenter a Year "))
let daysOfAYear=(year)=>{
	if(((year%4==0)&&(year%100!=0))||(year%400==0))
		return 366;
	else
		return 365;
}

console.log(daysOfAYear(year);)