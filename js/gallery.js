
document.querySelectorAll('.img-contaioner img').forEach(img => {
img.onclick = () => {
    document.querySelector('.pop-up').style.dispay = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');

}

})