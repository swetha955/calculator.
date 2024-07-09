let operator="";
let firstNumber="";
let secondNumber="";
function append(num){
    if(operator==""){
         firstNumber+=num;
         document.getElementById('result').value=firstNumber;
    }
    else{
        secondNumber+=num;
        document.getElementById('result').value=secondNumber;
    }
}
function operate(op){
    operator=op;
}

function result(){
    let res;
    switch(operator){
        case '+':
            res=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        case '-':
            res=parseInt(firstNumber)-parseInt(secondNumber);
            break;
        case '*':
            res=parseInt(firstNumber)*parseInt(secondNumber);
            break;
        case '/':
            res=parseInt(firstNumber)/parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value=res;

}
function clearresult(){
    operator="";
    firstNumber="";
    secondNumber="";
    document.getElementById('result').value="";
}