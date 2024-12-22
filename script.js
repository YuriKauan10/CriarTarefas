const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#form')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')
const botoes = document.querySelector('#botoes')
const tarefas = document.querySelector('#tarefas')
const divBranca = document.querySelector('#divBranca')


adicionar.addEventListener('click', () => {
    
    const div = document.createElement('div')
    div.classList.add('tarefaAdicionada')
    div.textContent = tarefaInput.value

    divBranca.appendChild(div)

    const taskConcluida = document.createElement('button')
    taskConcluida.textContent = '✓'
    taskConcluida.classList.add('taskConcluida')

    const taskRemovida = document.createElement('button')
    taskRemovida.textContent = '✕'
    taskRemovida.classList.add('taskRemovida')
    
    botoes.appendChild(taskConcluida)
    botoes.appendChild(taskRemovida)
    
})