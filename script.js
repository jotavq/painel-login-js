let email = document.querySelector('#txemail')
let pass = document.querySelector ('#txsenha')
let res = document.querySelector('#res')
let tentativas = 0

function entrar() {
    if (email.value === 'admin' && pass.value === '1234') {
        res.innerHTML = 'Login bem sucedido'
        res.style.color = 'green'
    } else if (tentativas < 3) {
        tentativas++
        res.innerHTML = `Login falhou. Tentativa ${tentativas}`
        res.style.color = 'red'
    } else if (tentativas >= 3) {
    res.innerHTML = 'Acesso bloqueado.'
    res.style.color = 'red'
    let botao = document.querySelector('input[type="button"]')
    botao.disabled = true
    }

}