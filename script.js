const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#form')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')
const botoes = document.querySelector('#botoes')
const tarefas = document.querySelector('#tarefas')

let numeroClasses = -1
let arrayTarefas = []

adicionar.addEventListener('click', () => {

    const divBranca = document.createElement('div')
    divBranca.classList.add('divBranca')
    tarefas.appendChild(divBranca)

    const divP = document.createElement('div')
    divP.classList.add('divP')
    divBranca.appendChild(divP)

    const p = document.createElement('p')
    p.classList.add('tarefaAdicionada')
    p.textContent = tarefaInput.value
    if(tarefaInput.value.length === 0){
        p.textContent = '-Vazio-'
    } 
    divP.appendChild(p)

    const divBotao = document.createElement('div')
    divBotao.classList.add('divBotao')
    divBranca.appendChild(divBotao)


    const taskConcluida = document.createElement('button')
    taskConcluida.textContent = '✓'
    taskConcluida.classList.add('taskConcluida')

    const taskRemovida = document.createElement('button')
    taskRemovida.textContent = '✕'
    taskRemovida.classList.add('taskRemovida')
    
    divBotao.appendChild(taskConcluida)
    divBotao.appendChild(taskRemovida)


    document.body.addEventListener('click', (e) => {
        const {target} = e

        if(target.className == 'taskConcluida'){
            teste++
            let paiBotao = target.parentElement
            let paiDoPai = paiBotao.parentElement
            let divParagrafo = paiDoPai.firstElementChild
            divParagrafo.classList.add('pConcluido')
            paiDoPai.classList.add('concluida')
        }else if(target.className == 'taskRemovida'){
           let botaoConcluido = target.previousSibling
           let divBotaoSelect = botaoConcluido.parentElement
           let paiDaDiv = divBotaoSelect.parentElement

           try {
            tarefas.removeChild(paiDaDiv)
        
           } catch (error) {if(!error){}}
        }
    })

})

