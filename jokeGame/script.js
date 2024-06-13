document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const question = document.getElementById('question');
    const result = document.getElementById('result');

    yesButton.addEventListener('click', () => {
        question.style.display = 'none';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        result.textContent = `I'm waiting!`;
    });

    noButton.addEventListener('click', () => {
        noButton.style.position = 'absolute';
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
