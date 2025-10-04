let data = {
  a: 10,
  b: {
    b1: 25,
    b2: {
      b21: 60,
      b22: 15
    }
  },
  c: 5
};

function largeobj(data){
    let max=-Infinity
    for(let key in data){
        let nested = largeobj(data[key])
        if(max<nested){
            max=nested
        }else if(max<data[key]){
            max=data[key]
        }
    }
    return max
}
console.log(largeobj(data))