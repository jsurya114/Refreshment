function removevowels(str){
    let result=''
  const vowels = ['a', 'e', 'i', 'o', 'u',
                    'A', 'E', 'I', 'O', 'U'];
                    for(let i of str){
                        let flag=0
                        for(let j of vowels){
                            if(i===j){
                                flag=1
                                break
                            }
                        }
                        if(flag===0){
                            result+=i
                        }
                    }
                    return result
}
let str='Hello World'
console.log(removevowels(str))