
(()=>{
const btnAgregar = document.querySelector('[data-form-btn]');
const crearCheck = (evento)=>{
    evento.preventDefault();
    const inputAgregar = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
    task.classList.add("card")

    const value = inputAgregar.value
    const taskContent = document.createElement("div");
    const textTitle = document.createElement("span")
    textTitle.classList.add("task");
    textTitle.innerText=value;
    

    taskContent.appendChild(checkComplete())
    taskContent.appendChild(textTitle)

    const content = `<div>
    ${checkComplete()}
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    inputAgregar.value = "";
    // task.innerHTML = content
    task.appendChild(taskContent)
    list.appendChild(task)
    console.log(content);

}

btnAgregar.addEventListener('click', crearCheck);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add("far","fa-check-square","icon");

    i.addEventListener("click", completeTask)

    return i;

}

const completeTask = (event)=>{
    const element = event.target
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
}
})();