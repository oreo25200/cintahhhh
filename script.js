document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const landingPage = document.getElementById('landing-page');
    const surprisePage = document.getElementById('surprise-page');
    const bgMusic = document.getElementById('bg-music');
    const typingText = document.getElementById('typing-text');
    const heartsContainer = document.getElementById('hearts-container');

    const message = "Kamu tidak akan bersaing dengan wanita manapun, aku tidak peduli apa kata orang lain tentang dirimu, apa yang kamu miliki, kamu akan tetap menjadi wanita kesayangan ku, wanita yang selalu ku bahagiakan, yang selalu sempurna di mata ku. Love you sayang 🤍🤍🤍";

    // Start floating hearts and sparkles
    setInterval(createHeart, 300);
    setInterval(createSparkle, 150);

    openBtn.addEventListener('click', () => {
        // Transition animation
        landingPage.classList.remove('active');
        
        setTimeout(() => {
            landingPage.style.display = 'none';
            surprisePage.style.display = 'flex';
            surprisePage.classList.add('active');
            
            // Play music
            bgMusic.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });

            // Start typing effect
            startTyping(message);
        }, 500);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
        sparkle.style.fontSize = Math.random() * 15 + 5 + 'px';
        
        heartsContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    function startTyping(text) {
        let i = 0;
        typingText.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        type();
    }
});
