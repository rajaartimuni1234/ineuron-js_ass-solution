function monthOfDay(n){
    if (n==1||n==3||n==5||n==7||n==9||n==10||n==12)
    console.log("31");
else if (n==2)
console.log("29/28");
else
console.log("30");
}

let month=7
monthOfDay(month)