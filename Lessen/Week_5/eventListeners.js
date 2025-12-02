document.addEventListener('DOMContentLoaded', () => {
    const knop = document.getElementById('knop');

    knop.addEventListener('click', () => {
        knop.innerHTML = 'Geklikt!';
        console.log('click');
    });
});