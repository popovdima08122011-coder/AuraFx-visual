
const tilt = document.querySelector('.image-main');

tilt.addEventListener('mousemove', (e) => {
    const rect = tilt.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    tilt.style.transition = 'transform 0.1s ease';
    tilt.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

tilt.addEventListener('mouseleave', () => {
    tilt.style.transition = 'transform 0.4s ease';
    tilt.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
