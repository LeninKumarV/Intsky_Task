var boxa =document.getElementById("input_a");
const boxb =document.getElementById("input_b");
const boxc =document.getElementById("input_c");
const boxd =document.getElementById("input_d");
const bar_code=document.getElementById("bar_code");
const value=document.getElementById("value");


var valuea=0;
var valueb=0;
var valuec=0;
var valued=0;
var count=0;

boxb.addEventListener("input",function getInput(e){
    valueb= Number.parseInt(e.target.value);;
    calculate();
    count++;
    console.log(count)
});

boxc.addEventListener("input",function getInput(e){
    valuec=Number.parseInt(e.target.value);
    calculate();
    count++;
});

boxd.addEventListener("input",function getInput(e){
    valued=Number.parseInt(e.target.value);
    calculate();
    count++;
});

function calculate(){
    valuea=Math.round(((valueb+valuec+valued)/100)*100);
    console.log(valuea);
    boxa.value=valuea;
    value.innerText=valuea;
    bar_code.style.width=`${valuea}%`;

    if(valuea>100){
        boxa.value="Error";
        value.innerText="Error";
        bar_code.style.width=`100%`;            
    }

    if(Number.isNaN(valuea)){
        console.log("err")
        valuea=0;
        boxa.value=valuea;
        value.innerText=valuea;
        bar_code.style.width=`${valuea}%`;
    }
}

