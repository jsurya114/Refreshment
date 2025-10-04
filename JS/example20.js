let arr = [5, 2, 9, 1, 3, 2, 5];


// removing the duplicates only
// let duplicates=[]
// for(let i=0;i<arr.length;i++){
//     let dp=false
//     for(let j=0;j<duplicates.length;j++){
//         if(arr[i]===duplicates[j]){
//             dp=true
//             break
//         }
//     }
//     if(!dp){
// duplicates.push(arr[i])
//     }
// }
// console.log(duplicates)
// output:[ 5, 2, 9, 1, 3 ]

//removing duplicates and that numbers too

// let dup=[]
// for(let i=0;i<arr.length;i++){
//     let dp=true
//     for(let j=0;j<arr.length;j++){
//         if(i!==j&&arr[j]===arr[i]){
//             dp=false
//             break
//         }
//     }
// if(dp){
//     dup.push(arr[i])
// }

// }
// console.log(dup)
// output:[ 9, 1, 3 ]


// showing numbers occured more than once

// let duplicate=[]
// for(let i=0;i<arr.length;i++){
//     let dp = false
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j])
//         {
//             dp=true
//             break
//         }
//     }
//     if(dp){
// duplicate.push(arr[i])
//     }
// }
// console.log(duplicate)
// output:[5, 2]
