
function calculate(num)
{
   let input = document.getElementById("inputValue");
    
   input.value = input.value + num;
}

function evaluation()
{
    let input = document.getElementById("inputValue");
    
    if(input.value != "")
    {
    try{
        input.value = eval(input.value);
    }catch(obj)
      {
       alert("Please click valid inputs");
      }
    
    if(input.value == 0)
      {
        input.value = "";
      }
   }
}

function cancelFun()
{
    let input = document.getElementById("inputValue");
    input.value = "";
}

function deleteFun()
{
    let input = document.getElementById("inputValue");
    let inputString = input.value;
    input.value = inputString.slice(0,-1);
}

function keyValidation(x)
{
   let input = document.getElementById("inputValue");
   // To allow Enter and = keys
   if(x == "Enter" || x == "=")
   {
    evaluation();
    return false;
   }
   
   // pattern to evaluate needed keys alone
  let pattern = /^[0-9\%\/\*\-\+\.\n]+$/;
  let checkPattern = pattern.test(x);
 // Backspace to delete operation
  if(x == "Backspace")
  {
    input.value = input.value.slice(0,-1);
  }
  // To restrict alphabet keys
  if(!checkPattern)
  {
    return false;
  }
  
}