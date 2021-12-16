const num1 = 2
const num2 = 13

//Parameter 
const addsum = (num1,num2) =>{
    console.log(`The sum is ${num1 + num2} ;)`)
}

//call void type
function addval(){
    console.log(`The sum is ****`,num1+num2)
}

addsum(num1,num2)
addval()