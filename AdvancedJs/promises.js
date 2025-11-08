try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data)
}catch(error){
    console.log(error)
    throw new Error("something went wrong")
} finally{
    console.log("The operation completed")
}
