const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return 
    }
    //  console.log(result)

    const first = result
    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err)
            return  
        }
        const second = result
        // console.log(result)

        writeFile('./content/third-async.txt',`Here are result: ${first}, ${second}`, (err,result) =>{
            if(err){
                console.log(err)
                return 
            }
            console.log(result)
            console.log('Done with pre task')
        })

    })
})

console.log('Now start new task')