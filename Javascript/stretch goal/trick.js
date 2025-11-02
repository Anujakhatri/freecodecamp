
let homeCount=0
let guestCount=0
let countHomeEl = document.getElementById("home-count")
let countGuestEl = document.getElementById("guest-count")

function incrementHome(num){
    homeCount+=num
    countHomeEl.innerText=homeCount
}
function incrementGuest(num){
    guestCount+=num
    countGuestEl.innerText=guestCount
}
