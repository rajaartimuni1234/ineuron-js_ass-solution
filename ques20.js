const shoppingCart=['milk','Coffee','tea','Honey']
let flag=false
for(let i=0; i<shoppingCart.length;i++){
    if (shoppingCart[i]=='meat')
    {
        flag=true;
        break;
    }
    else{
        flag=false;
    }

}

if (flag==false)
console.log(shoppingCart.unshift('meat'));
else{
    console.log("alrady add")
}



//2
for (let i=0; i<shoppingCart.length;i++){
    if (shoppingCart[i]=="Honey")
    {
        flag=true
        break;
    }
    else {
        flag=false
    }
}

if (flag==true){
  console.log(shoppingCart.pop())
shoppingCart.push("Green Tea")
}
else 
console.log("no found");

console.log(shoppingCart)