function Anagram(str1,str2){
    if(str1.length!==str2.length) return false
    let count1={}
    let count2={}
for(let char of str1){
    if(count1[char]===undefined){
        count1[char]=1
    }else{
        count1[char]++
    }
}
for(let char of str2){
    if(count2[char]===undefined){
        count2[char]=1
    }else{
        count2[char]++
    }
}
for(let key in count1){
    if(count1[key]!==count2[key]){
        return false
    }
}
return true

}
console.log(Anagram('listen','silent'))
console.log(Anagram('hello','world'))