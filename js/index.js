// Lấy nút bấm
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Hiện nút khi cuộn xuống 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Sự kiện click để cuộn lên đầu
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt
    });
});

