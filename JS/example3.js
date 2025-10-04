let arr1=[1,2,3,4,5]

let arr2=[6,7,8,9,10]

let merge=[]
for(let i=0;i<arr1.length;i++){
    merge[merge.length]=arr1[i]
}

for(let i=0;i<arr2.length;i++){
    merge[merge.length]=arr2[i]
}
console.log(merge)
let g=6
let c
for(let i=0;i<merge.length;i++){
    if(merge[i]===g){
c=true
break
    }
    
}
console.log(c)