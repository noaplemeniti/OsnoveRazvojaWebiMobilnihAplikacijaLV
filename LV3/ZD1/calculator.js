let expression = document.getElementById("mathematical_expression").value;

function updateExpression(value) {
    expression += value;
    document.getElementById("mathematical_expression").value = expression;
}

function calculateResult() {
    try{
        result = eval(expression.replace('×', '*').replace('÷', '/'));
        expression = result.toString();
        document.getElementById("mathematical_expression").value = expression;

    }
    catch (e){
        result = "Error";
    }
}

function clearExpression() {
    expression = "";
    document.getElementById("mathematical_expression").value = expression;
}