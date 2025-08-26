// Modal functionality for image gallery

// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item img');

// Create modal elements
const modal = document.createElement('div');
modal.classList.add('modal');
const modalImage = document.createElement('img');
modal.appendChild(modalImage);
const closeButton = document.createElement('span');
closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;';
modal.appendChild(closeButton);

document.body.appendChild(modal);

// Add click event to gallery items
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modalImage.src = item.src;
        modal.style.display = 'block';
    });
});

// Add click event to close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add click event to modal background
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// CSS for modal
const style = document.createElement('style');
style.innerHTML = `
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}
.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}
`;
document.head.appendChild(style);
