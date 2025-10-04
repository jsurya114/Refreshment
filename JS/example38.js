let data = {
  a: 10,
  b: {
    b1: 20,
    b2: {
      b21: 30,
      b22: 40
    }
  },
  c: 50
};
function Average(data){
    let sum=0
    let count=0
    function help(obj){
        for(let i in obj){
            if(typeof obj[i]==='object'){
                help(obj[i])
            }else{
                sum+=obj[i]
                count++
            }
        }
    }
    help(data)
    return sum/count
}
console.log(Average(data))