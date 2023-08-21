const placeholder=(callback)=>{
    setTimeout(()=>{
        console.log("placeholder printed")
        callback();
    },2000);
}
const startproduction=(callback)=>{
    setTimeout(()=>{
        console.log("product name printed")
        callback();
    },2000);
}
const PrintID=(callback)=>{
    setTimeout(()=>{
        console.log("id printed")
        callback();
    },2000);
}
const productName=(callback)=>{
    setTimeout(()=>{
        console.log("product name printed")
        callback();
    },2000);
}
const productDiscription=(callback)=>{
    setTimeout(()=>{
        console.log("product discription printed")
        callback();
    },2000);
}
console.log("order is now going to take ")
placeholder(()=>{
    console.log("pass to production")
    startproduction(()=>{
        console.log('passing ti id')
        PrintID(()=>{
            console.log("pass to product name")
            productName(()=>{
                console.log("pass to product discripton")
                productDiscription(()=>{
                    console.log("all task will be done")
                })
            })
        })
    })
})