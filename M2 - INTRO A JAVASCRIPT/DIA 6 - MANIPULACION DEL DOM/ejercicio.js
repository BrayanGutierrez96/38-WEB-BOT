
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function(event) {
        const clickedBox = event.target;
        alert(`Has clicado en: ${clickedBox.textContent}`);
    });
});
