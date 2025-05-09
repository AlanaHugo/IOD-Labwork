// let test1
// let test2


// function result() //this function will return a random value based on the option chosen by the user
// {
//     let optionID=document.getElementById("dice").value
    
    
//     //this will generate a random number from 1-10 based on the option selected
//       if (optionID == document.getElementById("10click").value) {
//         test1 = Math.floor(Math.random() *10) + 1;
//         document.getElementById("result").innerHTML = test1;
//         return test1
 
//     }
//     //this will generate a random number from 1-6 based on the option selected
//       else if (optionID == document.getElementById("6click").value) {
//         test2 = Math.floor(Math.random() *6) + 1;
//         document.getElementById("result").innerHTML = test2; 
//         return test2
//     }



// }

function result(){
  let optionID=document.getElementById("dice").value
  let randomno= getresult(optionID)
  document.getElementById("result").innerHTML = randomno;
}

function getresult(ten){
  let number = Math.floor(Math.random() *ten) + 1
  return number

}

if (getresult(4) <= 10 ) {
throw new Error('failed');
}

if (getresult(4) <= 11 ) {
  throw new Error('failed');
  }

if (getresult(4) <= 20 ) {
  throw new Error('failed');
    }

