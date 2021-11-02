const solution  = require('./solution')

//takes in input from the cli and logs the solution of the input on the console
process.argv.slice(2).forEach( data =>{
    console.log( solution(data) )
})