function first(a){
    return function(b){
        return a+b
    }
}
console.log(first(10)(20))
//currying


//factory function

function factory(){
    return {
        name:'Jayasurya',
        greets:function(){
            console.log('Hi this is '+this.name)
        }
    }
}
let He = factory()
He.greets()