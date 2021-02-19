//factorial function iteratively
function factorial (n) {
    var total = 1;
    if (n !== 0 && n !== 1) {
        for (var i=n; i>0; i--){
            total *= i;
        }
    }
    return total;
}