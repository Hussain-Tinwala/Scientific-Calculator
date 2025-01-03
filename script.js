document.addEventListener("DOMContentLoaded", function(){
    const display= document.getElementById('calc-display');
    // console.log(display);

    const buttons= document.getElementsByClassName('btn')
    // console.log(buttons);

    let currentValue="";

    function evaluate(){
        // console.log("CurrentValue:",currentValue);
        const convert=currentValue
        .replace("÷", "/")
        .replace("×", "*")
        .replace("%", "*0.01")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("tan", "Math.tan")
        .replace("√", "Math.sqrt")
        .replace("π", "Math.PI")
        .replace("log", "Math.log10")
        .replace("ln", "Math.log")
        .replace("e", "Math.E");
        // console.log("ConvertedValue:",convert);
        const result=eval(convert);
        currentValue=result.toString();
        display.value=currentValue;
        
    }

    for(let i=0; i<buttons.length; i++)
    {
        const button= buttons[i];
        button.addEventListener('click', function(){
            // console.log("Button clicked:", button.innerText);
            const value= button.innerText;

            try{

                if(value == "AC")
                {
                    currentValue="";
                    display.value=currentValue;
                } else if(value == "="){
                    evaluate();                        
                } else{
                    currentValue+=value;
                    display.value=currentValue;
    
                }
            } catch(error)
            {
                // console.error(error);
                currentValue="Error! Invalid Operation";
                display.value=currentValue;
            }

            
        })
    }

    // buttons[0].addEventListener('click', function(){
    //     console.log("Button click");
    // })
})