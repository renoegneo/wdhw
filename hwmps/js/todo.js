document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    
    if (taskText !== '') {  // Проверка, что текст не пустой
        const taskList = document.getElementById('taskList');
        
        // Создаем новый элемент для задачи
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Создаем кнопку удаления для задачи
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Добавляем кнопку удаления к задаче
        taskItem.appendChild(deleteButton);

        // Добавляем задачу в список
        taskList.appendChild(taskItem);

        // Очищаем поле ввода
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}