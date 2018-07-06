function buscarPalabra (oracion){
    const palabras = oracion.split(" ");
    let m = " ";

    for (let p in palabras){
        const p2 = palabras [p];
        if(m.lenght < p2.lenght){
            m = p2;
        }
    }
    return m;
    }
console.info(buscarPalabra("La programacion web es entretenida"));