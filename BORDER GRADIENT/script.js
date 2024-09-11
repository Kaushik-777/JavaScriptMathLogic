document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.getElementById('rain-container');
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(drop);
    }
});
