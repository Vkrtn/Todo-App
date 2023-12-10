const list = [

]

const FromLocalStorage = () => {
    const rawData = localStorage.getItem('list');
    const data = JSON.parse(rawData);

    if (data) {
        list.push(...data);
    }
};

const ToLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(list));
};

const render = (arr) => {
    ToLocalStorage();
    todoList.innerHTML = arr
        .map((el, i) => {
            return `
                <li class="todo-item">
                    <span>${i + 1}</span>
                    <input type="checkbox" class = "checkbox" ${el.completed ? "checked" : ""}>
                    <p style="${el.completed ? "text-decoration: line-through;" : "text-decoration: none;"}">${el.text}</p>
                    <button class="btn del">-</button>
                </li>
            `;
        })
        .join('');


        const checkBoxes = document.querySelectorAll('.checkbox');
        checkBoxes.forEach((el, i) => {
            el.onchange = () => {
                arr[i].completed == false ? arr[i].completed = true: arr[i].completed = false
                render(list)           
            };
        });

        const delBtn = document.querySelectorAll('.del');
        delBtn.forEach((el,i) =>{
            el.addEventListener('click', ()=>{
                arr.splice(i,1)
                render(list)
            })
        })

        // const sortBy = document.querySelector('.SortBy');

        // sortBy.onchange = () => {
        //     if (sortBy.value === 'DataO') {
        //         list.reverse();
        //         render();
        //     } else if (sortBy.value === 'DataN') {
        //         list.reverse();
        //         render();
        //     }
        // };
        
        const complited = document.querySelector('.complited');

        complited.onchange = () => {
            if (complited.checked) {
                const completedArr = list.filter(el => el.completed);
                render(completedArr);
            } else {
                render(list);
            }
        };
                
};

