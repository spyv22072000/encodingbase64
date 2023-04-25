let txt =document.getElementById('txt');
let encode =document.getElementById('encode');
let evaluate=document.getElementById('evalulate');
let encryption = document.getElementById('encryption')
let decodevalue=document.getElementById('inputvalue'); 

encode.addEventListener("click", myfunction);

function myfunction(){
    let data = txt.value;
    data=btoa(data);
    decodevalue.value=data;
};


