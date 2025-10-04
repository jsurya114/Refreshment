let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let merge=[]
for(let i=0;i<arr1.length;i++){
    merge.push(arr1[i])

}
for(let i=0;i<arr2.length;i++){
merge.push(arr2[i])
}

for(let i=0;i<merge.length;i++){
    for(let j=i+1;j<merge.length;j++){
if(merge[i]>merge[j]){
    let temp=merge[i]
    merge[i]=merge[j]
    merge[j]=temp
}
    }
}
console.log(merge)