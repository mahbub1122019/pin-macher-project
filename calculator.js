

//Random button Event Handler:::::::::::

    function randomButton() {
        document.getElementById("randomButton").addEventListener("click",function(){
            const random = document.getElementById("randomDisplay").value;
            const expectedRandom =1000+Math.random(random)*9000;
            const excellent =Math.round(expectedRandom);
            document.getElementById("randomDisplay").value=excellent;
        })
    
    }


function inputButton(number) {
    var inputNumberAll = number;
    document.getElementById("calculator-input").value+=inputNumberAll;
}
// Backbutton event handler::::::::::
function back() {
    var inputNumber = document.getElementById("calculator-input");
    var inputValue =inputNumber.value;
    document.getElementById("calculator-input").value=inputValue.slice(0,-1);
}
// All clear button event handler:::::::::::

   function clearText()  
{
    document.getElementById('calculator-input').value = "";

}  


//Submit Button event handler"""""""""""""
function notification() {
    document.getElementById("submitButton").addEventListener("click",function(){
        let randomNumber = document.getElementById("randomDisplay");
        let calculatorInput= document.getElementById("calculator-input");
    
        if (calculator-input=== randomDisplay) {
            document.getElementById("positive").style.display="block";   
        } else {document.getElementById("negative").style.display="block"
            
        }
    })
    
    
}

