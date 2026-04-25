//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let vIngresos = document.getElementById("txtIngresos");
    let ingresosStr = vIngresos.value;
    let ingresosBase = parseFloat(ingresosStr);

    let vEgresos = document.getElementById("txtEgresos");
    let egresosStr = vEgresos.value;
    let egresosBase = parseFloat(egresosStr);

    let disponible = calcularDisponible(ingresosBase, egresosBase);
    let mostrarDisponible = document.getElementById("spnDisponible");
    mostrarDisponible.textContent = disponible;

    let capacidadPago = calcularCapacidadPago(disponible);
    let mostrarCapacidadPago = document.getElementById("spnCapacidadPago");
    mostrarCapacidadPago.textContent = capacidadPago
}