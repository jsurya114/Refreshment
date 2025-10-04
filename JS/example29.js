let nested = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let result=[]
for(let i=nested.length-1;i>=0;i--){
    result.push(nested[i])
}
console.log(result)
// output:[ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]

let newArray=[]
for(let i=0;i<nested.length;i++){
    let inner=[]
    for(let j=nested[i].length-1;j>=0;j--){
        inner.push(nested[i][j])
    }
    newArray.push(inner)
}
console.log(newArray)
// output:[ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]


let Ar=[]
for(let i=nested.length-1;i>=0;i--){
    let rr=[]
    for(let j=nested[i].length-1;j>=0;j--){
        rr.push(nested[i][j])
    }
    Ar.push(rr)
}
console.log(Ar)
// output:[ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]