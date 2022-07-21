function display(){
  const element = document.getElementById("input");
  const val = element.value;
  const ans = eval(val);
  element.value = ans;
}
function fordisplay(myvalue){
  const val = document.getElementById("input");
  val.value += myvalue;
}
function clearscreen(){
  const elem=document.getElementById("input");
  elem.value="";
}




// let string = "";

// let buttons = document.querySelectorAll('.button');

// Array.from(buttons).forEach( (button)=>{
//     button.addEventListener('click' , (e)=>{
        
// if(e.target.innerHTML == '='){
//     string = eval(string);
//     document.querySelector('input').value = string;
// }
// else if(e.target.innerHTML == 'clear'){
//     string="";
//     document.querySelector('input').value = string;
// }
// else{
//         console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
// }

//     })
// } )