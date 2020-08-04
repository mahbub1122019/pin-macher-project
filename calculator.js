
//               Bismillahir Rahmanir Rahim
//Random button Event Handler:::::::::::

    function randomButton() {
       
            const randomDisplay = document.getElementById("randomDisplay").value;
            const random =1000+Math.random(randomDisplay)*9000;
            const randomNumber =Math.round(random);
            document.getElementById("randomDisplay").value=randomNumber;
       
    
    }


function inputButton(number) {
    var inputNumberAll = number;
    document.getElementById("calculator-input").value+=inputNumberAll;
}
// Backbutton event handler:
function back() {
    var inputNumber = document.getElementById("calculator-input");
    var inputValue =inputNumber.value;
    document.getElementById("calculator-input").value=inputValue.slice(0,-1);
}
// All clear button event handler:

   function clearText()  
{
    document.getElementById('calculator-input').value = "";

}  


//Submit Button event handler:

function notification() {
        var calculatorInput=document.getElementById("calculator-input");
        var randomInput=document.getElementById("randomDisplay");
        if (calculatorInput.value==randomInput.value) {
          const show =  document.getElementById("positive");
            show.style.display="block"
          
            
        } else {
          const alternative =  document.getElementById("negative");
            alternative.style.display="block";
            
        }
    
       
     
 }   
            
    