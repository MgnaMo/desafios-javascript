function sumar(valor1, valor2) { //suma de valores
    return parseFloat(valor1) + parseFloat(valor2);
};

function restar(valor1, valor2) { //resta de valores
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    return Math.max(0, resultado); //limita el resultado negativo a 0
};

function calcular(operacion) { //función para hacer click en los botones
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    let resultado = 0;

    if (operacion === 'sumar') {
        resultado = sumar(valor1, valor2);
    } else if (operacion === 'restar') {
        resultado = restar(valor1, valor2);
    };

    document.querySelector('.resultado').textContent = resultado; //entrega el resultado 
};

document.getElementById('btn-sumar').addEventListener('click', function() { //click en los botones para sumar y restar
    calcular('sumar');
});

document.getElementById('btn-restar').addEventListener('click', function() {
    calcular('restar');
});