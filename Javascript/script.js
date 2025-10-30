// document.getElementById("count-el").innerText=5;
let countEl=document.getElementById("count-el")

console.log(countEl)
let count=0
function increment(){
    // console.log("clicked")
    count=count+1
    countEl.innerText=count
    // document.getElementById(count)
    // document.getElementById("count-el").innerText=count
}
