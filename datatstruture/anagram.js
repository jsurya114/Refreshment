function anagram(str1,str2){
let count={}
for(let char of str1){
    if(count[char]===undefined){
count[char]=1
    }else{
        count[char]++
    }
}
for(let char of str2){
    if(!count[char]) return false
    count[char]--
}
return true
}



console.log(anagram("aabb", "abbb"))
console.log(anagram("aabb", "aabb"))