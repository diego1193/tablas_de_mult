const { myfile } = require('./createmodule')

let base = 3

myfile(base)
    .then((archivo) => {
        console.log(archivo);
    })
    .catch((error) => console.log(error))