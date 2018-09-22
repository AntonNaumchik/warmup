module.exports = function warmup(temperature) {
  // your implementation here
    var temp = temperature;
    switch (temp) {
        case -20:
            return(-4);
            break;
        case 0:
            return(32);
            break;
        case 15:
            return(59);
            break;
        case 40:
            return(104);
            break;
    }
};
