const btnAgregar = document.querySelector('[data-form-btn]');
const crearCheck = (evento)=>{
    evento.preventDefault();
    const inputAgregar = document.querySelector('[data-form-input]')
    console.log(inputAgregar.value);
}

btnAgregar.addEventListener('click', crearCheck);