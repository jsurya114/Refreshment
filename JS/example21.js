let arr1 =  [4, 5, 6, 7, 8];
let arr2 = [4, 5, 6, 7, 8];

let c=true
if(arr1.length!==arr2.length) c=false
for(let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i] ) c=false
}

console.log(c)