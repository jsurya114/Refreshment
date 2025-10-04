let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// let common=[]
// for(let i=0;i<arr1.length;i++){
//     common.push(arr1[i])
// }

// for(let i=0;i<arr2.length;i++){
//     common.push(arr2[i])
// }

// let newA=[]
// for(let i=0;i<common.length;i++){
//     let co=false
//     for(let j=i+1;j<common.length;j++){
//         if(common[i]===common[j]){
//             co=true
//             break
//         }
//     }
//     if(co){
// newA.push(common[i])
//     }

// }
// console.log(newA)


let com=[]
for(let i=0;i<arr1.length;i++){

    for(let j=0;j<arr2.length;j++){
  if(arr1[i]===arr2[j]){
      let c=false
      for(let k=0;k<com.length;k++){
      if(arr1[i]===com[k]){
          c=true
          break
      }
      }
      if(!c){
        com.push(arr1[i])
      }
  }

    }
}

console.log(com)