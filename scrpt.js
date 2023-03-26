const btnAgregar = document.querySelector('[data-form-btn]');
const crearCheck = (evento)=>{
    evento.preventDefault();
    const inputAgregar = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
    task.classList.add("card")
    const value = inputAgregar.value
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    inputAgregar.value = "";
    task.innerHTML = content
    list.appendChild(task)
    console.log(content);

}

btnAgregar.addEventListener('click', crearCheck);