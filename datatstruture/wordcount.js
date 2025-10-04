function count(str){
    let words=str.split(' ')
    let hash={}
    for(let word of words){
        if(hash[word]){
            hash[word]++
        }else{
            hash[word]=1
        }
    }
    return hash
}
const str = "apple banana apple orange banana banana";
console.log(count(str))
