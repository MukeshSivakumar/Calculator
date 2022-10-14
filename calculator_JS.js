
function calculate(num)
{
   let input = document.getElementById("inputValue");
    
   input.value = input.value + num;
}

function evaluation()
{
    let input = document.getElementById("inputValue");
    console.log("input Eval : "+(input.value == ""));
    if(input.value != "")
    {
    try{
        input.value = eval(input.value);
    }catch(obj)
      {
       alert("Please click valid inputs");
       console.log(obj)
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