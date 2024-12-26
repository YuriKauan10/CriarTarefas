const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#form')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')
const botoes = document.querySelector('#botoes')
const tarefas = document.querySelector('#tarefas')

let numeroClasses = -1
let arrayTarefas = []

let divBranca
let divP
let p
let divBotao
let taskConcluida
let taskRemovida

adicionar.addEventListener('click', () => {

    divBranca = document.createElement('div')
    divBranca.classList.add('divBranca')
    tarefas.appendChild(divBranca)

    divP = document.createElement('div')
    divP.classList.add('divP')
    divBranca.appendChild(divP)

    p = document.createElement('p')
    p.classList.add('tarefaAdicionada')
    p.textContent = tarefaInput.value

    if(tarefaInput.value.length === 0){
        p.textContent = '-Vazio-'
    } 

    divP.appendChild(p)

    divBotao = document.createElement('div')
    divBotao.classList.add('divBotao')
    divBranca.appendChild(divBotao)

    taskConcluida = document.createElement('button')
    taskConcluida.textContent = '✓'
    taskConcluida.classList.add('taskConcluida')

    let boolean = true
    
    taskConcluida.addEventListener('click', (e) => {
        const {target} = e
        const botaodiv = target.parentElement
        const divprincipal = botaodiv.parentElement
        if(boolean){
            divprincipal.classList.add('concluida')
            divprincipal.firstElementChild.classList.add('pConcluido')
        }else{
            divprincipal.classList.remove('concluida')
            divprincipal.firstElementChild.classList.remove('pConcluido')
        }

        boolean = !boolean
    })

    taskRemovida = document.createElement('button')
    taskRemovida.textContent = '✕'
    taskRemovida.classList.add('taskRemovida')
    
    taskRemovida.addEventListener('click', (e) => {
        const {target} = e
        const botaodiv = target.parentElement
        const divprincipal = botaodiv.parentElement
        tarefas.removeChild(divprincipal)
    })

    divBotao.appendChild(taskConcluida)
    divBotao.appendChild(taskRemovida)
    arrayTarefas.push(divBranca)
})


