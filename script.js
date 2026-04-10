let flippedCards = 0;
const music = document.getElementById('bgMusic');

// 1. Auto Start Music on First Click
document.addEventListener('click', () => {
    music.play().catch(e => console.log("Music wait for user interaction"));
}, { once: true });

// 2. Loading to Cards
setTimeout(() => {
    showSection('cards-screen');
}, 3500);

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// 3. Flip logic
function flip(card) {
    if(!card.classList.contains('is-flipped')) {
        card.classList.add('is-flipped');
        flippedCards++;
        if(flippedCards === 3) document.getElementById('card-next').classList.remove('hidden');
    }
}

// 4. Decoration Logic
function decorate() {
    let b = document.getElementById('banner');
    b.style.display = 'block';
    setTimeout(() => b.style.opacity = '1', 10);
    document.getElementById('cake-btn').classList.remove('hidden-item');
    document.getElementById('cake-btn').style.display = 'inline-block';
}

function revealCake() {
    let cake = document.getElementById('birthday-cake');
    let text = document.getElementById('wish-text');
    let next = document.getElementById('cake-next-btn');
    
    [cake, text, next].forEach(el => {
        el.style.display = 'block';
        setTimeout(() => el.style.opacity = '1', 10);
    });
}

// 5. Final Message Typewriter
function startTypewriter() {
    const text = "Happy birthday Riya! I know maybe you don't wanna celebrate it but still you are my best friend and you deserve to be treated like a queen today. Every day with you is special, but today is the most special because the world got a gem like you. Always be happy! ❤️";
    let i = 0;
    const target = document.getElementById('typewriter');
    target.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Trigger typewriter when final section opens
observer = new MutationObserver((mutations) => {
    if(document.getElementById('final-section').classList.contains('active')) {
        startTypewriter();
    }
});
observer.observe(document.getElementById('final-section'), { attributes: true });

function celebrate() {
    alert("🎊 Party Time! Happy Birthday Riya! 🎊");
    // You can add a confetti library here like canvas-confetti
}