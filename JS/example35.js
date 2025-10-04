let data = {
  a: 10,
  b: {
    b1: 20,
    b2: {
      b21: 30
    }
  },
  c: 40
};
function Nestedobj(data){
    let sum=0
    for(let key in data){
        if(typeof data[key]==='object'){
            sum+=Nestedobj(data[key])
        }else{
            sum+=data[key]
        }
    }
    return sum
}
const obj=Nestedobj(data)
console.log(obj)