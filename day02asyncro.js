function Delay(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },time);
    })
}
async function placeorder(){
    await Delay(2000)
    console.log("order taken");
}
async function startproduction(){
    await Delay(2000)
    console.log("start production");
}
async function PrintID(){
    await Delay(2000)
    console.log("print id started");
}
async function productName(){
    await Delay(2000)
    console.log("product name");
}
async function productDiscription(){
    await Delay(2000)
    console.log("product descriptin");
}


async function main()
{
    console.log("order is now going to take place");
   await placeorder();
   console.log("product is in production");
    startproduction();
    console.log("id is printing started")
    PrintID();
    console.log("product name is printing")
    productName();
    console.log("product description")
    productDiscription();

}
main()