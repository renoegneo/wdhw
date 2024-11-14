
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    const imagesPerSlide = 3; // Количество изображений на слайд

    function showImage(index) {
        const offset = -index * (100 / imagesPerSlide);
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + imagesPerSlide) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - imagesPerSlide + images.length) % images.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Автоматическая прокрутка (опционально)
    setInterval(nextImage, 3000); // Каждые 3 секунды

