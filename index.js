var formulario = document.querySelector("form")
var salarioBruto = document.querySelector("")
var dependentes = document.querySelector("")
var resultado = document.querySelector("")
var tabelaINSS = document.querySelector("")
var tabelaIRRF = document.querySelector("")
var tabelaValeTransporte = document.querySelector("")
var tabelaSalarioLiquido = document.querySelector("")

formulario.addEventListener("submit", (e)=> {
    e.preventDefault()
    // adicionar condicoes de preenchimento dos campos
    calcular()
})

function calcular() {
    var salarioBrutoValue = salarioBruto.value
    var dependentesValue = dependentes.value
    
    
    var valeTransporte = salarioBrutoValue*0.06

    switch (salarioBrutoValue) {
        case salarioBrutoValue <= 1302.00:
            var INSS = salarioBrutoValue*0.075
            break
        case salarioBrutoValue >= 1302.01 && salarioBrutoValue <= 2571.29:
            var INSS = salarioBrutoValue*0.09
            break
        case salarioBrutoValue >= 2571.30 && salarioBrutoValue <= 3856.94:
            var INSS = salarioBrutoValue*0.12
            break
        case salarioBrutoValue >= 3856.95 && salarioBrutoValue <= 7507.49:
            var INSS = salarioBrutoValue*0.14
            break
        case salarioBrutoValue >= 7507.50:
            var INSS = 7507.50*0.14
            break
        default:
            window.alert("error")
    }

    switch (salarioBrutoValue) {
        case salarioBrutoValue <= 1903.98:
            var IRRF = 0
            break
        case salarioBrutoValue >= 1903.99 && salarioBrutoValue <= 2826.65:
            var IRRF = (salarioBrutoValue*0.075)-(dependentesValue * 189.59)
            break
        case salarioBrutoValue >= 2826.66 && salarioBrutoValue <= 3751.04:
            var IRRF = (salarioBrutoValue*0.15)-(dependentesValue * 189.59)
            break
        case salarioBrutoValue >= 3751.06 && salarioBrutoValue <= 4664.68:
            var IRRF = (salarioBrutoValue*0.225)-(dependentesValue * 189.59)
            break
        case salarioBrutoValue > 4664.68:
            var IRRF = (salarioBrutoValue*0.275)-(dependentesValue * 189.59)
            break
        default:
            window.alert("error")
    }

    var salarioLiquido = salarioBruto - valeTransporte - INSS - IRRF

    tabelaINSS.textContent = `R$${INSS.toFixed(2)}`
    tabelaIRRF.textContent = `R$${IRRF.toFixed(2)}`
    tabelaValeTransporte.textContent = `R$${valeTransporte}`
    tabelaSalarioLiquido.textContent = `R$${salarioLiquido}`
    resultado.classList.toggle("visivel")
}
