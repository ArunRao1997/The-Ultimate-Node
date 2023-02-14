function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order for coffee received')
        }
        else{
            reject('Other orders rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} and is served`)
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(err){
//     console.log(err)
// }) // chaining of promise

// async await

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('soup')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }
   
}

serveOrder()