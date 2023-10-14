 let weight=38;
 let height=5
 
 function  BMI (w ,x){
   if ( w==='')
   console.log("provide a valid height");
  
    else if (height==" "){
    console.log("prodive a valid height")
    }else  {
     let bmi=(w/(x*x)/1000).toFixed(2)

     if (bmi<18.5)
     console.log("underweight");
   else if(bmi>18.5 && bmi<24.9)
    console.log("Normal Weight");
   else if (bmi>25 && bmi<29.9)
   console.log("Overweight");
   else if(bmi>=30)
    console.log("obese");
     
    }
 }

BMI(weight,height)