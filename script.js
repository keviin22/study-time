const html = document.querySelector('html')
const estudarBt = document.querySelector('.app__card-button--estudar')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const titulo = document.querySelector('.titulo')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')

const iniciarOuPausarBt = document.querySelector('#start-pause span')

const tempoNaTela = document.querySelector('#timer')

const audioPlay = new Audio('/songs/quest_accept_tw3.mp3')
const audioPausa = new Audio('/songs/quest_complete_tw3.mp3')

let tempoDecorridoEmSegundos = 1500
let inetervaloId = null

estudarBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('estudar')
    estudarBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto){ //esta função vai alterar os fundos e titulos da página
    mostrarTempo() 
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

//funcão que irá fazer a contagem regressiva
const contagemRegressiva = () => {
    //iniciar()
    if (tempoDecorridoEmSegundos <= 0){
        alert('Tempo Finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if (inetervaloId){
        audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    inetervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
}

function zerar (){
    clearInterval(inetervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    inetervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()