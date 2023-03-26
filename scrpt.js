
import checkComplete from "./componete/checkComplete.js"
import deleteIcon from "./componete/deleteIcon.js"
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

    inputAgregar.value = "";
    // task.innerHTML = content
    task.appendChild(taskContent)
    list.appendChild(task)

    task.appendChild(deleteIcon());

}

btnAgregar.addEventListener('click', crearCheck);
})();