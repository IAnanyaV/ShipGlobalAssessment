document.querySelectorAll('.task').forEach(task => {
    task.querySelector('.left').addEventListener('click', () => moveTask(task, 'left'));
    task.querySelector('.right').addEventListener('click', () => moveTask(task, 'right'));
});

function moveTask(task, direction) {
    const column = task.closet('.box');
    const columnId = column.querySelector('h2').textContent.toLowerCase();

    let targetColumnId;

    if (direction === 'left') {
        if (columnId === 'todo') targetColumnId = 'backlog';
        if (columnId === 'ongoing') targetColumnId = 'todo';
        if (columnId === 'done') targetColumnId = 'ongoing';
    } else if (direction === 'right') {
        if (columnId === 'backlog') targetColumnId = 'todo';
        if (columnId === 'todo') targetColumnId = 'ongoing';
        if (columnId === 'ongoing') targetColumnId = 'done';
    }

    if (targetColumnId) {
        const targetColumn = Array.from(document.querySelectorAll('.box')).find(box => box.querySelector('h2').textContent.toLowerCase() === targetColumnId).querySelector('.task-list');
        targetColumn.appendChild(task);
        updateButtonStates();
    }
}

function updateButtonStates() {
    document.querySelectorAll('.task').forEach(task => {
        const column = task.closest('.box').querySelector('h2').textContent.toLowerCase();

        const leftButton = task.querySelector('.left');
        const rightButton = task.querySelector('.right');

        if (column === 'backlog') {
            leftButton.disabled = true;
            rightButton.disabled = false;
        } else if (column === 'todo') {
            leftButton.disabled = false;
            rightButton.disabled = false;
        } else if (column === 'ongoing') {
            leftButton.disabled = false;
            rightButton.disabled = false;
        } else if (column === 'done') {
            leftButton.disabled = false;
            rightButton.disabled = true;
        }
    });
}

updateButtonStates();
