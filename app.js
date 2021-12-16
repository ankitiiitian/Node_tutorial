// const num  = 12
// if(num<10)
// {
//     console.log('small number')
// }
// else{
//     console.log('Large Number') 
// }

// console.log(__dirname)
// setInterval(() => {
//     console.log('hellow world')
// },1000)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)

