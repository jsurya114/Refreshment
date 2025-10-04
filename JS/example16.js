let num=1
const Interval = setInterval(()=>{
    console.log(num)
    num++
    if(num===20){
        clearInterval(Interval)
    }
},2000)