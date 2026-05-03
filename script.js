document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const landingPage = document.getElementById('landing-page');
    const surprisePage = document.getElementById('surprise-page');
    const bgMusic = document.getElementById('bg-music');
    const typingText = document.getElementById('typing-text');
    const heartsContainer = document.getElementById('hearts-container');

    const textParts = [
        "Kamu tidak akan bersaing dengan wanita manapun, aku tidak peduli apa kata orang lain tentang dirimu, apa yang kamu miliki...",
        "Kamu akan tetap menjadi wanita kesayangan ku, wanita yang selalu ku bahagiakan...",
        "Yang selalu sempurna di mata ku. Love you sayang 🤍🤍🤍",
        "Aku cuma mau bilang… kalau selama ini aku pernah salah, pernah nyakitin, atau bikin kamu kecewa—aku minta maaf ya.",
        "Aku sadar aku belum sempurna, masih banyak kurangnya. Tapi percayalah, aku selalu berusaha jadi lebih baik.",
        "Kalau masih ada hal yang ganjel di hati kamu, semoga bisa dimaafkan. Aku hargai banget setiap kebaikan kamu selama ini 🤍"
    ];

    // Start floating elements
    setInterval(createHeart, 400);
    setInterval(createSparkle, 200);
    setInterval(createPetal, 1000);

    window.nextPage = function(currentId, nextId) {
        const current = document.getElementById(currentId);
        const next = document.getElementById(nextId);
        
        current.classList.remove('active');
        setTimeout(() => {
            current.style.display = 'none';
            next.style.display = 'flex';
            next.classList.add('active');
            
            if (nextId === 'message-page') {
                typeSequence(0, 3);
            } else if (nextId === 'apology-page') {
                typeSequence(3, 6);
            }
        }, 500);
    };

    openBtn.addEventListener('click', () => {
        landingPage.classList.remove('active');
        
        setTimeout(() => {
            landingPage.style.display = 'none';
            document.getElementById('gallery-page').style.display = 'flex';
            document.getElementById('gallery-page').classList.add('active');
            
            bgMusic.play().catch(console.error);
        }, 500);
    });

    // Interactive effects
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) spawnSparkle(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        if (Math.random() > 0.8) {
            spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    document.addEventListener('click', (e) => {
        if (landingPage.style.display === 'none') {
            spawnHeart(e.clientX, e.clientY);
        }
    });

    function spawnSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '10px';
        heartsContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    function typeSequence(index, endIndex) {
        if (index >= endIndex) return;
        
        const element = document.getElementById(`text-${index + 1}`);
        if (!element) return;
        
        let i = 0;
        const text = textParts[index];
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 40);
            } else {
                setTimeout(() => typeSequence(index + 1, endIndex), 500);
            }
        }
        type();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heart.style.fontSize = Math.random() * 15 + 10 + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    function spawnHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'heart-pop';
        heart.innerHTML = '❤️';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
        heartsContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = '🌸';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.fontSize = Math.random() * 10 + 10 + 'px';
        heartsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), 10000);
    }
});
