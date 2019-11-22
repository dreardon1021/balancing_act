var closeButton = document.querySelector('#close');
var banner = document.querySelector('#welcome');

closeButton.addEventListener('click', closeBanner);

function closeBanner(){
  banner.style.display = 'none';
};
