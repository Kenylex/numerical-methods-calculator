function solve() {
    var initialApproximationInput = document.getElementById("initialApproximation").value;
    var iterationsInput = document.getElementById("iterations").value;
    
    var initialApproximation = parseFloat(initialApproximationInput);
    var iterations = parseInt(iterationsInput);
    
    if (isNaN(initialApproximation) || isNaN(iterations)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    
    var result = newtonMethod(initialApproximation, iterations);
    
    document.getElementById("result").value = result.toFixed(6);
}

function newtonMethod(initialApproximation, iterations) {
    var x = initialApproximation;
    
    for (var i = 0; i < iterations; i++) {
        var fx = Math.cos(x) - Math.pow(x, 3);
        var fxPrime = -Math.sin(x) - 3 * Math.pow(x, 2);
        
        if (fxPrime === 0) {
            alert("La derivada se anula en el punto actual. No se puede continuar con el método de Newton.");
            return NaN;
        }
        
        x = x - fx / fxPrime;
    }
    
    return x;
}