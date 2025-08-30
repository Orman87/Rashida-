// Romantic quotes data with image placeholders
const romanticData = [
    {
        imageUrl: "https://files.catbox.moe/mg8odg.jpg", // Replace with your image URL
        quote: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn"
    },
    {
        imageUrl: "https://files.catbox.moe/biwim0.jpg", // Replace with your image URL
        quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
        author: "Angelita Lim"
    },
    {
        imageUrl: "https://files.catbox.moe/s3il9f.jpg", // Replace with your image URL
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        imageUrl: "https://files.catbox.moe/8n7d9g.jpg", // Replace with your image URL
        quote: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle"
    },
    {
        imageUrl: "https://files.catbox.moe/s3il9f.jpg", // Replace with your image URL
        quote: "I need you like a heart needs a beat.",
        author: "Unknown"
    },
    {
        imageUrl: "https://files.catbox.moe/mg8odg.jpg", // Replace with your image URL
        quote: "If I had a flower for every time I thought of you, I could walk in my garden forever.",
        author: "Alfred Lord Tennyson"
    }
];

// Function to generate the gallery cards
function generateGallery() {
    const gallery = document.getElementById('imageGallery');
    
    romanticData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-img">
                <div class="img-placeholder">https://files.catbox.moe/73gpsw.jpg</div>
                <!-- Replace the above line with: <img src="${item.imageUrl}" alt="Romantic image"> -->
            </div>
            <div class="card-content">
                <p class="card-quote">"${item.quote}"</p>
                <p class="card-author">- ${item.author}</p>
            </div>
        `;
        
        gallery.appendChild(card);
    });
}

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', generateGallery);
