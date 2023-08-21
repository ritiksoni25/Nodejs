function getaalu(callback){
    setTimeout(()=>{
        const aalu="🥔"
        console.log("here we got the aalu",aalu)
        callback(aalu);
    },500);
}
function makedough(aalu,callback){
    setTimeout(()=>{
        const dough= aalu+"🥔"
        console.log("dough is ready")
        callback(dough);
    },500);
}
function makeaalukulcha(aalu,dough,callback){
    setTimeout(()=>{
        const kulchas= aalu+dough+"🥔"
        console.log("kulcha is ready")
        callback(kulchas);
    },500);
}



getaalu((aalu)=>{
    makedough(aalu,(dough)=>{
        makeaalukulcha(aalu,dough,(kulchas)=>{
            console.log("kulcha is being server to the custumer")
        })
    })
})