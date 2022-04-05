console.log(test1)
console.log(test2)


test1()
// test2() // TypeError: test2 is not a function




function test1(){
    console.log('This is test1')
}


var test2 = function(){
    console.log('This is test2')
}

var myName = 'Brian'

console.log(test1)
console.log(test2)


test1()
test2()