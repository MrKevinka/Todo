// mamoon part

// nita part
document.addEventListener('DOMContentLoaded', function() {
    const taskText = document.querySelector('.task-text');
    const editButton = document.querySelector('.edit-button');

    editButton.addEventListener('click', function() {
        const currentText = taskText.textContent;
        const newText = prompt('Edit the task:', currentText);

        if (newText !== null && newText !== '') {
            taskText.textContent = newText;
        }
    });
});
// vaishali part

// kevin part
