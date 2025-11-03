let fighters=["🥳", "🤡", "🦹🏼‍♂️", "🐸", "🧟‍♀️", "👹", "👻", "☠️", "🐰", "🧤", "🐝", "🐒"]

let EmojistageEl=document.getElementById("emojiStage")
let fightButton=document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    let randomFighterOne = Math.floor(Math.random()*fighters.length)
    let randomFighterTwo = Math.floor(Math.random()*fighters.length)
    EmojistageEl.textContent= fighters[randomFighterOne] + " vs " + fighters[randomFighterTwo]
})

