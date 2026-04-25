//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){

    limpiarErrores();

    let ingresos = document.getElementById("txtIngresos");
    let egresos = document.getElementById("txtEgresos");
    let monto = document.getElementById("txtMonto");
    let plazo = document.getElementById("txtPlazo");
    let tasa = document.getElementById("txtTasaInteres");

    let valido = true;

    if (!ingresos.checkValidity()){
        mostrarError("errIngresos", ingresos, "Ingrese un valor válido");
        valido = false;
    }

    if (!egresos.checkValidity()){
        mostrarError("errEgresos", egresos, "Ingrese un valor válido");
        valido = false;
    }

    if (!monto.checkValidity()){
        mostrarError("errMonto", monto, "Monto inválido");
        valido = false;
    }

    if (!plazo.checkValidity()){
        mostrarError("errPlazo", plazo, "Plazo inválido");
        valido = false;
    }

    if (!tasa.checkValidity()){
        mostrarError("errTasa", tasa, "Tasa inválida");
        valido = false;
    }

    if (!valido) return;

    let ingresosBase = parseFloat(ingresos.value);
    let egresosBase = parseFloat(egresos.value);
    let montoBase = parseFloat(monto.value);
    let plazoBase = parseInt(plazo.value);
    let tasaBase = parseFloat(tasa.value);

    let disponible = calcularDisponible(ingresosBase, egresosBase);
    document.getElementById("spnDisponible").textContent = disponible;

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").textContent = capacidadPago;

    let interes = calcularInteresSimple(montoBase, tasaBase, plazoBase);
    document.getElementById("spnInteresPagar").textContent = interes;

    let total = calcularTotalPagar(montoBase, interes);
    document.getElementById("spnTotalPrestamo").textContent = total;

    let cuota = calcularCuotaMensual(total, plazoBase);
    document.getElementById("spnCuotaMensual").textContent = cuota;

    let credito = aprobarCredito(capacidadPago, cuota);

    let estado = document.getElementById("spnEstadoCredito");
    estado.textContent = credito ? "CREDITO APROBADO" : "CREDITO RECHAZADO";
}

function mostrarError(idError, input, mensaje){
    document.getElementById(idError).textContent = mensaje;
    input.classList.add("input-error");
}

function limpiarErrores(){
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.querySelectorAll("input").forEach(i => i.classList.remove("input-error"));
}