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

//using async/await, handle error with try/catch blocks and add finally blocks
//for complex task
async function getData(){
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
}

//Promise chaining with .then() and .catch()
//for simple task
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log("The operation completed"))

//using promises to escape callback hell

function uploadFile(file){
    return new Promise((resolve, reject) => {
        console.log("Step 1 :Uploading file...")//upload file
        setTimeout(() => {
            resolve()
        }, 1000)
    })
} 

function processFile(file){
    return new Promise((resolve, reject) => {
        console.log("Step 2 :Processing file...")//process file
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function notifyUser(){
    return new Promise((resolve, reject) => {
        console.log("Step 3 :Notifying user...")//notify user
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}