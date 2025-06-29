// DOM Elements
const addPageBtn = document.getElementById('addPageBtn');
const addPageModal = document.getElementById('addPageModal');
const closeModal = document.getElementById('closeModal');
const scrapbookForm = document.getElementById('scrapbookForm');
const albumContainer = document.querySelector('.album-container');

// Open modal
addPageBtn.addEventListener('click', () => {
    addPageModal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
    addPageModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === addPageModal) {
        addPageModal.style.display = 'none';
    }
});

// Form submission
scrapbookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('pageTitle').value;
    const date = document.getElementById('pageDate').value;
    const imageUrl = document.getElementById('pageImage').value;
    const desc = document.getElementById('pageDesc').value;
    
    // Format date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create new page element
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.innerHTML = `
        <div class="page-content">
            <div class="page-image">
                <img src="${imageUrl}" alt="${title}">
            </div>
            <div class="page-details">
                <h3 class="page-title">${title}</h3>
                <p class="page-date">${formattedDate}</p>
                <p class="page-desc">${desc}</p>
            </div>
        </div>
        <div class="sticker sticker-1">${getRandomEmoji()}</div>
        <div class="sticker sticker-2">${getRandomEmoji()}</div>
    `;
    
    // Insert new page before the "add page" button
    albumContainer.insertBefore(newPage, addPageBtn);
    
    // Reset form
    scrapbookForm.reset();
    
    // Close modal
    addPageModal.style.display = 'none';
});

// Helper function to get random emoji
function getRandomEmoji() {
    const emojis = ['❤️', '🌟', '🎉', '✨', '🌸', '🌿', '🍀', '🌞', '🌻', '🦋'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}