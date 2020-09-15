document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('_activesidebar');
    document.querySelector('.burger').classList.toggle('_activeburger')
});

//?Preloader=====================================================================================
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};
//?End Preloader=====================================================================================
document.querySelector('#galgofa').addEventListener('click', () => {
    alert('Галгофа');
});
