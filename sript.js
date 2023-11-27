let monInput = document.querySelector("input");

for (let i = 0; i <= 9; i++) {
    let numbtn = document.getElementById("btn" + i);

    numbtn.addEventListener("click", function() {
        monInput.value += numbtn.innerHTML;
    });
}
let monbtnC = document.getElementById("monC")
monbtnC.addEventListener("click",function(){
    monInput.value = ""
})
let monBtnBack = document.getElementById("monBack")
monBtnBack.addEventListener("click",function(){
    monInput.value = monInput.value.slice(0,-1)
})
for (let i = 0; i <= 3; i++) {
    let numSigne = document.getElementById("signe" + i);

    numSigne.addEventListener("click", function() {
        monInput.value += numSigne.innerHTML;
    });
}
let monEgal = document.getElementById("equals");
monEgal.addEventListener("click", function(){
    console.log("resultat est " , monInput.textContent)
 monInput.value = calculate(monInput.value);  
})
// let regex = /x/g
// if (monInput.value.includes("x")){
//     monInput.value = monInput.value.replace("x","*")
// }


let expression = monInput.textContent
function calculate(expression) {
    monInput.value = monInput.value.replace("x","*")
    monInput.value = monInput.value.replace("÷","/")
    return eval(expression);
    
  }
