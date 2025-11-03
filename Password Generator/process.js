let listPasswords=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

let passwordLength=8
let passwordOneEl = document.getElementById
("pass1-el")
let passwordTwoEl = document.getElementById("pass2-el")

let passGenerateButton= document.getElementById("pass-el")

passGenerateButton.addEventListener("click",function(){
    let passwordOne = ""
    let passwordTwo = ""
    for(let i=0; i<8; i++){
        let randomIndexOne = Math.floor(Math.random()*listPasswords.length)
        let randomIndexTwo = Math.floor(Math.random()*listPasswords.length)
        passwordOne = passwordOne + listPasswords[randomIndexOne]
        passwordTwo = passwordTwo + listPasswords[randomIndexTwo]
    }
    passwordOneEl.textContent=passwordOne
    passwordTwoEl.textContent=passwordTwo
})

let copyButtonOne= document.getElementById("copy1-el")
let copyMsgOne= document.getElementById("msg1")

copyButtonOne.addEventListener("click",function(){
    navigator.clipboard.writeText(passwordOneEl.textContent)
    copyMsgOne.textContent= "Copied to clipboard!";
    copyMsgOne.classList.add("show");

    //hide msg after 2 sec
    setTimeout(()=>{
        copyMsgOne.classList.remove("show")
    },2000);
})

let copyButtonTwo= document.getElementById("copy2-el")
let copyMsgTwo= document.getElementById("msg2")

copyButtonTwo.addEventListener("click",function(){
    navigator.clipboard.writeText(passwordTwoEl.textContent)
    copyMsgTwo.textContent= "Copied to clipboard!";
    copyMsgTwo.classList.add("show");

    //hide msg after 2 sec
    setTimeout(()=>{
        copyMsgTwo.classList.remove("show")
    },2000);
})
