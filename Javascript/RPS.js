let game=["rock","paper","scissors"]

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*3)
    return game[randomCard]
}
console.log(getRandomCard())