function greet(lang,city){
    console.log(`iam ${this.name} speaks ${lang} from ${city}`)
}
const person={
    name:'Jayasurya'
}
greet.call(person,'malayalam','kerala')
greet.apply(person,['Telungu','Andra Pradesh'])
let bound=greet.bind(person)
bound('hindi','delhi')