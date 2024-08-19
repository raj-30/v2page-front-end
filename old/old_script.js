document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close');

    // Function to shuffle items randomly
    function shuffleGalleryItems() {
        const gallery = document.querySelector('.gallery');
        const itemsArray = Array.from(galleryItems);
        
        for (let i = itemsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            gallery.appendChild(itemsArray[j]);
        }
    }

    shuffleGalleryItems();  // Shuffle the gallery items

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = item.querySelector('img');
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
        });
    });

    closeLightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function (event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});