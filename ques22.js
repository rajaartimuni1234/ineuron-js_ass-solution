const ages=[19,22,19,24,29,25,26,24,25,24]
//1
let sortages=ages.sort()
console.log(ages)

let max=sortages[sortages.length-1]
let min=sortages[0]
console.log(max);
console.log(min);
//2

let midian=sortages[sortages.length/2]
console.log(midian);

//3

let sum=0
for(let i=0; i<sortages.length;i++){
    sum+=sortages[i]
}
let average=sum/sortages.length
console.log(average)

console.log(max-min)

//5
let maxrange=Math.abs(max-average)
console.log(max-average);
let minrange=Math.abs(min-average)
console.log(minrange);