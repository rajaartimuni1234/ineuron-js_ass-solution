let countries =['londaon', 'India', 'new york', 'Ethiopia']
let flag=false
for (let i=0; i<countries.length;i++){
  if (countries[i]=='Ethiopia')
     flag=true

     else 
       flag=false
}
if (flag==true)
  console.log('ETHIOPIA')
else
console.log(countries.unshift('Ethiopia'));