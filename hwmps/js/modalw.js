// Получаем элементы
var modal = document.getElementById('modal');
var openModalBtn = document.querySelector('.open-modal-btn');
var closeModalBtn = document.getElementById('closeBtn');

// Открытие модального окна
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex'; // Делаем окно видимым
});

// Закрытие модального окна по нажатию на крестик
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Скрываем окно
});

// Закрытие модального окна при клике вне окна
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});