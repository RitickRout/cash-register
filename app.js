const billAmount = document.querySelector("#bill-amount");
const amountGiven = document.querySelector("#amount-given");
const Checkbutton = document.querySelector(".button-check");
const errorMessage = document.querySelector(".error-message");
const noofNotes = document.querySelectorAll(".no-of-notes");

const availCash =[2000, 500, 100, 20, 10, 5, 1];

function calculateReturn(returnamount)

{
    for(let i = 0 ; i < availCash.length; i++ )
    {
      const  numofNotes = Math.trunc(returnamount/availCash[i]);
       var temp = returnamount%availCash[i];
       returnamount=temp;
       noofNotes[i].innerText=numofNotes;
    }

}  


function showMessage(msg)
{
    console.log("here");
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}

Checkbutton.addEventListener("click",function validate(){
    errorMessage.style.display = "none"; //to hide a message 
    if(billAmount.value > 0)
    {
        if(amountGiven.value >= billAmount.value)
        {
            const amounttobeReturned = amountGiven.value -billAmount.value;
               calculateReturn(amounttobeReturned);

        }else{
            showMessage("The cash provided is less then bill");
        }
    } else {
        
        showMessage("Invalid Bill Amount");
        
    }

   
});