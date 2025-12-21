//Script para funções do formulário


const radioContratar = document.getElementById('contratar')
const atualizacao = document.getElementById('atualizacoes')
const opcoesExtra = document.getElementById('contratarOpcao')

radioContratar.addEventListener("change",(e)=>{
    opcoesExtra.style.display = 'flex'
})

atualizacao.addEventListener('change',(e)=>{
    opcoesExtra.style.display = 'none'
})
//Aparece sessão de contratar no formulário

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
