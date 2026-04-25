//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let vIngresos = document.getElementById("txtIngresos");
    let ingresosStr = vIngresos.value;
    let ingresosBase = parseFloat(ingresosStr);

    let vEgresos = document.getElementById("txtEgresos");
    let egresosStr = vEgresos.value;
    let egresosBase = parseFloat(egresosStr);

    let resultado = calcularDisponible(ingresosBase, egresosBase);
    let mostrarResultado = document.getElementById("spnDisponible");
    mostrarResultado.textContent = resultado;
}