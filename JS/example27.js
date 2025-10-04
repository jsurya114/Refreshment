let strings = ["hi", "hello", "javascript", "js", "world"];
let longest = "";
for(let i of strings){
    if(i.length>longest.length){
        longest=i
    }
}
console.log(longest)