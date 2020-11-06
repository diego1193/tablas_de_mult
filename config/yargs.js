let Myobjets = {
    base: {
        demmand: true,
        alias: "b",
    },
    limite: {
        alias: "l",
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Muestra la tabla de multiplicar', Myobjets)
    .command('crear', 'Muestra la tabla', Myobjets)
    .help()
    .argv
module.exports = {
    argv
}