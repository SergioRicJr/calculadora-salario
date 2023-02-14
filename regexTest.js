
var nome = "31"

if (nome.match(/^(\s)*[0-9]{1,2}(\s)*$/)) { // ! para indicar o not na expressao
    console.log("passou")
} else {
    console.log("não passou")
}