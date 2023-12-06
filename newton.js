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