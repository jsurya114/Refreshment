function toSum(nums,target){
    let map={}
    for(let i=0;i<nums.length;i++){
        let diff=target-nums[i]
        if(map[diff]!==undefined){
            return [map[diff],i]
        }
        map[nums[i]]=i
    }
}
let nums = [2, 7, 11, 15]
let target = 13
console.log(toSum(nums,target))
