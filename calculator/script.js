let display=document.querySelector(".text-area");
buttons=document.querySelectorAll('button');
let displayValue="";

for(item of buttons){
    item.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText="*";
            displayValue+=buttonText;
            display.value=displayValue;

        }
        
        else if(buttonText=='C'){
            displayValue="";
            display.value=displayValue;
        }
        else if(buttonText== "="){
            var result;
            try{
                result=eval(displayValue);
            }catch(error){
                result='expression error';
            }
            display.value=result;
        }
        else{
            displayValue+=buttonText;
            display.value=displayValue;
        }

    });
}