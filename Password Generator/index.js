let saveButton=document.querySelector(".refactor")
let outputEl= document.getElementById("output")

saveButton.addEventListener("click",function(){
    outputEl.value= "clicked!";
});
