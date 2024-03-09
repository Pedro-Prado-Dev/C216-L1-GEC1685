let nome = "[Pedrão] - [GEC1685]";
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "!");
}
saudacaoPersonalizada(nome);

let modulo = require('./module.js');
modulo.saudacao();