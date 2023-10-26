# LIVRO NODE JS
### Todos os documentos de um node tem que ter um documento package.json
Todo projeto Node.js é chamado de módulo, mas o que é um módulo? No decorrer
da leitura, perceba que falarei muito sobre o termo módulo, biblioteca e framework,
e na prática eles possuem o mesmo significado. O termo módulo surgiu do conceito
de que a arquitetura do Node.js é modular. E todo módulo é acompanhado de um
arquivo descritor, conhecido pelo nome de package.json.

Como no codigo abaixo que apresentarei como deve ser esse modulo.
 
{
    "name": "meu-primero-node-app",
    "description": "Meu primeiro app em Node.js",
    "author": "Caio R. Pereira <caio@email.com>",
    "version": "1.2.3",
    "private": true,
    "dependencies": {
        "modulo-1": "1.0.0",
        "modulo-2": "~1.0.0",
        "modulo-3": ">=1.0.0"},
    "devDependencies": {
        "modulo-4": "*"
    }
}
`

Para verificação de onde tirei cada parte desse projeto: 
`https://github.com/caio-ribeiro-pereira/livro-nodejs/tree/master/desafio-1`