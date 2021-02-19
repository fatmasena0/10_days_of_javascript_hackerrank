function getMaxLessThanK (n, k) {
    let max = 0;
    let bw;
    for (let i=1; i<n+1; i++) {
        for (var j=i+1; j<n+1; j++) {
            bw = i&j;
            if (bw > max && bw < k) max = bw;
        }
    }
    return max;
}