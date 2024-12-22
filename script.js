const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#form')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')
const botoes = document.querySelector('#botoes')
const tarefas = document.querySelector('#tarefas')


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
    
})