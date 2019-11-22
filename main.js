var closeButton = document.querySelector('#close');
var banner = document.querySelector('#welcome');
var containerShift = document.querySelector('.JS-hackfix')

closeButton.addEventListener('click', closeBanner);

function closeBanner(){
  banner.style.display = 'none';
  containerShift.style.bottom = '112px'
};
