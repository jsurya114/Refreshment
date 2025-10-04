let arr = [1, 2, 3, 4, 5, 6];
let index = 3;
let p1=[]
let p2=[]
for(let i=0;i<index;i++){
    p1.push(arr[i])
}
console.log(p1)

let array = [1, 2, 3, 2, 4];

let s=true
for(let i=0;i<array.length/2;i++)
{
    if(array[i]!==array[array.length-1-i]){
        s=false;
        break
    }
}
console.log(s)