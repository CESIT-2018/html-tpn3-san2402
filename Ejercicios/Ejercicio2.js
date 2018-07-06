function cantM(value) {
    let resto = value;
    const m = [];
        while (resto > 0) {
            if (resto > 25) {
                m.push (25);
                resto -= 25;
                }else if (resto > 10) {
                m.push (10);
                resto -= 10;
                    }else if (resto > 5) {
                m.push (5);
                resto -= 5;
                    }else if (resto > 2) {
                m.push (2);
                resto -= 2;
                        }else if (resto >= 1) {
                m.push (1);
                resto -= 1;
            }
        }
        return m;
}

console.info(cantM(75));