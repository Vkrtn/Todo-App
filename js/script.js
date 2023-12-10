const addForm = document.forms.addForm;
const addBtn = addForm.addBtn;
const addInput = addForm.addInput;
const todoList = document.querySelector('.list');
FromLocalStorage();
render(list);


addBtn.addEventListener('click', e => {
    e.preventDefault();
    const item = { text: addInput.value, completed: false };
    if (addInput.value) {
        list.push(item);
        render(list);
    } else {
        console.warn('Error');
    }
});



console.log(list);
