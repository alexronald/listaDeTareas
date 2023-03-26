const deleteIcon=()=>{
    const i = document.createElement("i");
    i.classList.add("icon","trashIcon","fa-trash-alt","fas")
    i.addEventListener("click",deleteTask);

    return i
}

const deleteTask=(event)=>{

    const element = event.target.parentElement
    element.remove()
}

export default deleteIcon