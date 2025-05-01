function result() 
{
    let optionID=document.getElementById("dice").value
      if (optionID == document.getElementById("10click").value) {
        document.getElementById("result").innerHTML = Math.floor(Math.random() *10) + 1;
      }
      else if (optionID == document.getElementById("6click").value) {
        document.getElementById("result").innerHTML = Math.floor(Math.random() *6) + 1;
    }
}