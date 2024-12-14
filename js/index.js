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

// Bắt sự kiện khi nhấn nút View
document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function () {
        // Lấy dữ liệu từ các thuộc tính data-
        const title = this.getAttribute('data-title');
        const author = this.getAttribute('data-author');
        const year = this.getAttribute('data-year');
        const img = this.getAttribute('data-img');
        const status = this.getAttribute('data-status');

        // Gán dữ liệu vào modal
        document.getElementById('modal-book-title').innerText = title;
        document.getElementById('modal-book-author').innerText = author;
        document.getElementById('modal-book-year').innerText = year;
        document.getElementById('modal-book-status').innerText = status;
        document.getElementById('modal-book-img').src = img;
    });
});