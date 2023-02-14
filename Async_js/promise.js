// how to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 5

    setTimeout(()=>{
        if (a===b) {
            resolve('The values are equal')
        }
        else{
            reject('The values are not equal')
        }
    }, 2000)
})

// pending state
console.log(myPromise)

// fulfilled state - then method
// consuming promise
myPromise.then(function(result){
    console.log(result)
})// fulfilled State

myPromise.catch(function(err){
    console.log(err)
}) // rejected State

// Your promise will get settled
