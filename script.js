const pai = document.querySelector('#pai')
const divTarefa = document.querySelector('#tarefa')
const tarefaInput = document.querySelector('#tarefaInput')
const adicionar = document.querySelector('#adicionar')



adicionar.addEventListener('click', () => {
    const botaoOk = document.createElement('button')
    botaoOk.classList.add('botaoAdd')
    const div = document.createElement('div')
    div.classList.add('teste')

    div.textContent = tarefaInput.value
    pai.appendChild(div)
    
    tarefaInput.value = ''
})