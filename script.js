//Script para funções do formulário


const radioContratar = document.getElementById('contratar')
const atualizacao = document.getElementById('atualizacoes')
const opcoesExtra = document.getElementById('contratarOpcao')

radioContratar.addEventListener("change",(e)=>{
    opcoesExtra.style.display = 'flex'
      senha.required = true
      confsenha.required = true
})

atualizacao.addEventListener('change',(e)=>{
    opcoesExtra.style.display = 'none'
    senha.required = false
    confsenha.required = false
})
//Aparece sessão de contratar no formulário
let senha = document.getElementById('senha')
let confsenha = document.getElementById('confsenha')

let divsPlanoGame = [...document.querySelectorAll('div.planoGame')]
let radioDeOpcoes = [...document.querySelectorAll('input.op')]

divsPlanoGame.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
        radioContratar.checked = true
        opcoesExtra.style.display = 'flex'
        radioDeOpcoes[index].checked = true

        document.getElementById('Formulario').scrollIntoView({ behavior: 'smooth' })
    })
})

//Aplicação de scroll e ativação das opções de contrato do formulário
//A partir do click nas divs de planos e preços
const form = document.getElementById('Formulario')

form.addEventListener('submit',(e)=>{
        e.preventDefault()
    if(opcoesExtra.style.display === 'flex'){
        e.preventDefault()
        window.location.href = 'pageOB.html'
        form.reset()
    } else{
        e.preventDefault()
        alert('Enviaremos nossas Ofertas e Novidades ao Email cadastrado!')
        form.reset()
    }
})


