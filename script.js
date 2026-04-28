let email = document.querySelector('#txemail')
let pass = document.querySelector ('#txsenha')
let res = document.querySelector('#res')
let lembrar = document.querySelector('#lembrar')
let tentativas = 0

let emailCadastrado = ""
let senhaCadastrada = ""

function esqueciSenha() {
    res.innerHTML = 'Função em desenvolvimento'
    res.style.color = '#ff0000'
}

function registrar() {
    emailCadastrado = email.value
    senhaCadastrada = pass.value
    res.innerHTML = 'Registro feito com Sucesso'
    res.style.color = '#0FF0FC'
}

function entrar() {
    if (emailCadastrado === "" || senhaCadastrada === "") {
        res.innerHTML = 'Faça o registro antes de tentar entrar'
        res.style.color = '#ff0000'
        return
    }
    if (email.value === emailCadastrado && pass.value === senhaCadastrada) {
        res.innerHTML = 'Login bem sucedido'
        res.style.color = '#00ff00'
    if (lembrar.checked) {
        localStorage.setItem('email', email.value)
        localStorage.setItem('senha', pass.value)
    } else {
        localStorage.removeItem('email')
        localStorage.removeItem('senha')
    }
    } else {
        tentativas++
  if (tentativas >= 3) {
        res.innerHTML = 'Acesso bloqueado.'
        res.style.color = '#ff0000'

        let botao = document.querySelector('input[type="button"]')
        botao.disabled = true
    } else {
        res.innerHTML = `Login falhou, você tem mais <strong>${3 - tentativas} tentativas</strong>`
        res.style.color = '#ff0000'
    }
}
}

let emailSalvo = localStorage.getItem('email')
let senhaSalva = localStorage.getItem('senha')

if (emailSalvo && senhaSalva) {
    email.value = emailSalvo
    pass.value = senhaSalva
    lembrar.checked = true
}
