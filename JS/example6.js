// Find the first occurrence of a target value in an array
let array = [5, 2, 2, 4, 7, 2, 9];
let target = 2;
let firstIndex = -1;
let c
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        firstIndex=i
    
        c=array[i]
        break
    }
}
console.log(c,firstIndex)