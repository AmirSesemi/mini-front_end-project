let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let gameOver = false;

        const guessInput = document.getElementById('guessInput');
        const guessBtn = document.getElementById('guessBtn');
        const message = document.getElementById('message');
        const attemptsSpan = document.getElementById('attempts');
        const correctNumberSpan = document.getElementById('correctNumber');
        const guessDisplay = document.getElementById('guessDisplay');
        const restartBtn = document.getElementById('restartBtn');

        function checkGuess() {
            if (gameOver) {
                message.innerHTML = '🎮 بازی تموم شده! دکمه "بازی جدید" رو بزن.';
                return;
            }

            const userGuess = parseInt(guessInput.value);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                message.innerHTML = '⚠️ لطفاً یه عدد معتبر بین 1 تا 100 وارد کن!';
                guessInput.value = '';
                guessInput.focus();
                return;
            }

            attempts++;
            attemptsSpan.textContent = attempts;
            guessDisplay.textContent = userGuess;

            if (userGuess === secretNumber) {
                message.innerHTML = `🎉 آفرین! عدد درست ${secretNumber} بود! توی ${attempts} حدس پیدا کردی! 🏆`;
                message.style.background = '#c6f6d5';
                message.style.color = '#22543d';
                gameOver = true;
                correctNumberSpan.textContent = secretNumber;
                guessBtn.disabled = true;
                guessInput.disabled = true;
            } else if (userGuess < secretNumber) {
                message.innerHTML = '📈 برو بالا! عدد بزرگ‌تره.';
                message.style.background = '#f7fafc';
                message.style.color = '#2d3748';
            } else {
                message.innerHTML = '📉 بیا پایین! عدد کوچیک‌تره.';
                message.style.background = '#f7fafc';
                message.style.color = '#2d3748';
            }

            guessInput.value = '';
            guessInput.focus();
        }

        function restartGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            gameOver = false;
            attemptsSpan.textContent = attempts;
            correctNumberSpan.textContent = '?';
            guessDisplay.textContent = '?';
            message.innerHTML = '🔄 بازی جدید! یه عدد بین 1 تا 100 حدس بزن.';
            message.style.background = '#f7fafc';
            message.style.color = '#2d3748';
            guessBtn.disabled = false;
            guessInput.disabled = false;
            guessInput.value = '';
            guessInput.focus();
        }

        guessBtn.addEventListener('click', checkGuess);
        guessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') checkGuess();
        });
        restartBtn.addEventListener('click', restartGame);

        // Focus on input on load
        guessInput.focus();

        // Console cheat (for big sister 😉)
        console.log('🤫 عدد مخفی:', secretNumber);



        