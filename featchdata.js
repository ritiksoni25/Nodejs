async function fetchdata(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        if(!response.ok){
            throw new Error("network response failed")
        }
        const data = await response.json()
        console.log(data);
    }catch (Error){
        console.error("error fatching data : ",Error)
    }
}
fetchdata()