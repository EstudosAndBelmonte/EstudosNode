// Criando meu primeiro teste no console.
console.log('Hello World!!')

// Em qualquer browser a palavra-chave window permite criar variáveis globais que são acessadas em qualquer lugar. Já no Node.js utilizamos uma outra keyword para aplicar essa mesma técnica:
global.hoje = new Date();
console.log(global.hoje);

module.exports = function (msg) {
    console.log(msg);
};