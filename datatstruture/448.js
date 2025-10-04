function deletedOnes(nums){
 let  seen={}
 let result=[]
 for(let num of nums){
  seen[num]=true
 }
 for(let i=0;i<nums.length;i++){
    if(!seen[i]){
        result.push(i)
    }
 }
 return result
}
console.log(deletedOnes([4,3,2,7,8,2,3,1])); 
// Output: [5, 6]
