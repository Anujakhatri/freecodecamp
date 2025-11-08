//Ternary Operator

const exerciseTimeMins = 20
const message = exerciseTimeMins < 30 ? "You need to try harder!"
    : exerciseTimeMins < 60 ? "Doing Good!"
    : "You're an expert!"


//setTimeout with params
//eg:1
function displayTrafficLight(light){
    console.log(light)
}
setTimeout(displayTrafficLight, 1000, "🟢")
displayTrafficLight("🛑")

//eg:2
console.log("what is the capital of Nepal?")

const questionTimer = setTimeout(() => {
    console.log("The capital of Nepal is Kathmandu")
}, 5000)

clearTimeout(questionTimer)
console.log("Cancelling the question")
