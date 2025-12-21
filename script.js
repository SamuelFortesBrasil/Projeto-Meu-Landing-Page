//Script para função contratar serviço do formulário


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
console.log(divsPlanoGame)
