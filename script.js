const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#form')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')
const botoes = document.querySelector('#botoes')
const tarefas = document.querySelector('#tarefas')
const segundoTitulo = document.querySelector('#tituloTarefa')     // Puxando elementos do html

let arrayTarefas = [] // declaração de um array que vai receber cada tarefa 

let divBranca
let divP
let p               // Declaração de variaveis 
let divBotao
let taskConcluida
let taskRemovida

segundoTitulo.style.display = 'none'

adicionar.addEventListener('click', () => { // evento de adicionar a div, criação de novos elementos e classes

    segundoTitulo.style.display = 'flex'
    
    divBranca = document.createElement('div')
    divBranca.classList.add('divBranca')       // Div principal onde vai ser inserido o texto e os botões
    tarefas.appendChild(divBranca) 

    divP = document.createElement('div')
    divP.classList.add('divP')                  // Div onde vai apareçer a tarefa digitada
    divBranca.appendChild(divP)

    p = document.createElement('p')
    p.classList.add('tarefaAdicionada')  // Texto que vai dentro da div P que vai ser inserido o valor digitado no input
    p.textContent = tarefaInput.value

    if(tarefaInput.value.length === 0){ // se não for digitado nada, sai um texto vazio
        p.textContent = '-Vazio-'
    } 

    divP.appendChild(p) // coloca o p dentro da div P

    divBotao = document.createElement('div')
    divBotao.classList.add('divBotao')              // Criação da div dos botões
    divBranca.appendChild(divBotao)

    taskConcluida = document.createElement('button')
    taskConcluida.textContent = '✓'                        // Criação do botão de conclusão
    taskConcluida.classList.add('taskConcluida')

    let boolean = true // Variavel para observar o estado atual do botão, se ja foi apertado o evento troca
    
    taskConcluida.addEventListener('click', (e) => { 
        const {target} = e // Desestruturação pra pegar o event.target
        const botaodiv = target.parentElement // o pai do elemento taskConcluida e o DivBotao
        const divprincipal = botaodiv.parentElement // o pai do DivBotao é a DivBranca
        if(boolean){
            divprincipal.classList.add('concluida') // DivBranca recebe a classe 'concluida'
            divprincipal.firstElementChild.classList.add('pConcluido') // e seu primeiro elemento, a divP recebe outra classe
        }else{
            divprincipal.classList.remove('concluida') // se ja tiver concluida, remove o estilo pra o default
            divprincipal.firstElementChild.classList.remove('pConcluido')
        }

        boolean = !boolean // mudando o valor do estado atual do botão, caso seja apertado denovo, o else será acionado
    })

    taskRemovida = document.createElement('button') // criação do segundo botão, o botão de remover a div 
    taskRemovida.textContent = '✕'
    taskRemovida.classList.add('taskRemovida') 
    
    taskRemovida.addEventListener('click', (e) => { // evento de exclusão da div
        const {target} = e // desestruturação do event.target
        const botaodiv = target.parentElement // o elemento pai do taskRemovida é o divBotao
        const divprincipal = botaodiv.parentElement // o elemento pai do divBotao é a divBranca
        tarefas.removeChild(divprincipal) // remove a div inteira
        arrayTarefas.pop(divprincipal)
    })

    divBotao.appendChild(taskConcluida) // Div botao recebe os dois botões
    divBotao.appendChild(taskRemovida)
    arrayTarefas.push(divBranca) // array das tarefas(não é mostrado no sistema)
})


