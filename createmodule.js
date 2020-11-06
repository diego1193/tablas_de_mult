const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


let listMult = (base, limite) => {
    let data = '';

    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            rejects(`Ingresaste el numero mal`)
        }
        for (i = 0; i <= limite; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/Texto-tabla ${base}`, data, (err) => {
            if (err) {
                rejects(err);
            } else {
                resolve(`se creo la tabla del ${base} hasta ${limite}`);
            }

        });
    });

}

let myfile = (base) => {
    let data = '';

    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            rejects(`Ingresaste el numero mal`)
        }
        for (i = 0; i < 100; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/Texto-tabla ${base}`, data, (err) => {
            if (err) {
                rejects(err);
            } else {
                resolve(`se creo la tabla del ${base}`);
            }

        });
    });
}

module.exports = {
    myfile,
    listMult
}