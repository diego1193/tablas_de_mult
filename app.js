const fs = require('fs');

let base = 2;
let data = '';

for (i = 0; i < 100; i++) {
    data += `${base}*${i} = ${base * i}\n`;
}

fs.writeFile(`Tablas/Texto-tabla ${base}`, data, (err) => {
    if (err) throw err;
    console.log(`se creo la tabla del ${base}`);
})