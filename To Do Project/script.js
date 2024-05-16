const inputEl=document.querySelector('.to-do-container input');
const todoList=document.querySelector('.tasks li');
const todoPlace=document.querySelector('.to-do-container')
inputEl.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        addtask(this.value);
        remove();
        //console.log(this.value);
        this.value='';

    }
   
    

});
// adding tasks
function addtask(value){
    const newElement=document.createElement('ul');
    newElement.classList.add('tasks');
    newElement.innerHTML=` <li>${value}</li>
    <i class="fa-solid fa-xmark mark"></i> `
    todoPlace.appendChild(newElement);
    
}
// removing tasks
function remove() {
    const deleteButtons = document.querySelectorAll('.mark');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the parent <li> element of the clicked delete button
            const taskToRemove = button.parentNode;
            
            taskToRemove.remove();
        });
    });
}
