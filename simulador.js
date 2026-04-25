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
    mostrarCapacidadPago.textContent = capacidadPago;

    let plazoAño = document.getElementById("txtPlazo");
    let plazoAñoStr = plazoAño.value;
    let plazoAñoBase = parseInt(plazoAñoStr);

    let tasa = document.getElementById("txtTasaInteres");
    let tasaStr = tasa.value;
    let tasaBase = parseInt(tasaStr);

    let monto = document.getElementById("txtMonto");
    let montoStr = monto.value;
    let montoBase = parseInt(montoStr);

    let interesSimple = calcularInteresSimple(montoBase, tasaBase, plazoAñoBase);
    let mostrarInteresSimple = document.getElementById("spnInteresPagar");
    mostrarInteresSimple.textContent = interesSimple;

    let totalPagar = calcularTotalPagar(montoBase, interesSimple);
    let mostrarTotalPagar = document.getElementById("spnTotalPrestamo");
    mostrarTotalPagar.textContent = totalPagar;

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAñoBase);
    let mostrarCuotaMensual = document.getElementById("spnCuotaMensual");
    mostrarCuotaMensual.textContent = cuotaMensual;
}