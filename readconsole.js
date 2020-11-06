////////////////// Con YARGS//////////////////

const { myfile, listMult } = require('./createmodule')

const argv = require('./config/yargs').argv

let command = argv._[0];
// Cambia 'Listar' , por el comando q yo le ordene 'node readconsole crear --base=8'' lo cambia por crear
// para poderlo hacer tengo que crearlos .command('crear',.....,{...}).argv
switch (command) {
    case "crear":
        listMult(argv.base, argv.limite)
            .then((archivo) => console.log(archivo))
            .catch((error) => console.log(error))
        break;
    case "listar":
        myfile(argv.base)
            .then((archivo) => console.log(archivo))
            .catch((error) => console.log(error))
        break;
    default:
        console.log("no hay ningun comando");
}


// console.log('Limite', argv.limite);

/////////////////////// Con process////////////


// let argv = process.argv;

// let parametro = argv[2];

// let base = parametro.split('=')[1]
//     // console.log(base);

///////////////////////////////////////////////



// let base = 3
// myfile(base)
//     .then((archivo) => {
//         console.log(archivo);
//     })
//     .catch((error) => console.log(error))