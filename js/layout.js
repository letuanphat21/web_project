document.addEventListener('DOMContentLoaded', () => {
    // Select all clickable images
    const images = document.querySelectorAll('.clickable-img');
    const modalImage = document.getElementById('modalImage');

    // Add click event listener to each image
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Set the modal image source to the clicked image's data-image attribute
            modalImage.src = image.getAttribute('data-image');
        });
    });
});
