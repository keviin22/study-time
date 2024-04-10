const html = document.querySelector('html')
const estudarBt = document.querySelector('.app__card-button--estudar')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const titulo = document.querySelector('.titulo')
const botoes = document.querySelectorAll('.app__card-button')

estudarBt.addEventListener('click', () => {
    alterarContexto('estudar')
    estudarBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto){ //esta função vai alterar os fundos e titulos da página
    botoes.forEach(function (contexto){ //função para remover o css do botão que não está clicado
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto) //Seletor para alterar o data-contexto
    switch (contexto){//switch case que vai alterar o os titulos da página.
        case "estudar":
            titulo.innerHTML = `
            Estude comigo`
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Faça um breve descanso`
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Faça um descanso longo`
            default:
            break;
    }
}
