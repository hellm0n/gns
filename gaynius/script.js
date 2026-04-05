function loadLayout() {
    // Функция-помощник для загрузки
    const insertComponent = (elementId, filePath) => {
        const element = document.getElementById(elementId);
        if (element) {
            fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                    element.classList.add('loaded'); 
                })
                .catch(err => console.error('Ошибка загрузки ' + filePath, err));
        }
    };

    // Загружаем и шапку, и футер
    insertComponent('header-placeholder', 'header.html');
    insertComponent('footer-placeholder', 'footer.html');
}

document.addEventListener('DOMContentLoaded', loadLayout);
