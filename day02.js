const placeorder = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("order is placed")
        resolve
    },3000)
})
const startproduction = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("production is started")
        resolve
    },3000)
})
const PrintID = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("id name is started")
        resolve
    },3000)
})
const productName = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("product name is started")
        resolve
    },3000)
})
const productDiscription = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("production description is started")
        resolve
    },3000)
})
console.log("order is now going to take")
placeorder
    .then(()=>{
        console.log("id printing strated...");
        return startproduction
    })
    .then(()=>{
        console.log("id print started")
        return PrintID
    })
    .then(()=>{
        console.log("product name start printing")
        return productName
    })
    .then(()=>{
        console.log("product discription start printing")
        return productDiscription
    })