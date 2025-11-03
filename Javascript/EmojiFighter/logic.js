let fruits=["🍊", "🍎", "🍎", "🍊", "🍊", "🍎", "🍊", "🍎", "🍊", "🍊", "🍎","🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sortFruits(){
    for(let i=0; i<fruits.length; i++){
        if(fruits[i]==="🍎"){
            appleShelf.textContent+= "🍎"
        }
        else if (fruits[i]==="🍊"){
            orangeShelf.textContent+="🍊"
        }       
    }
}
sortFruits()