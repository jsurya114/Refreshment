function removedup(str){
    let seen={}
    let letter=""
    for(let char of str){
        if(!seen[char]){
            letter+=char
            seen[char]=true
        }
    }
    return letter
}
console.log(removedup('this is jayasurya'))