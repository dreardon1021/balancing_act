var closeButton = document.querySelector('#close');
var banner = document.querySelector('#welcome');
var containerShift = document.querySelector('.JS-hackfix');

closeButton.addEventListener('click', closeBanner);

function closeBanner(){
  banner.style.display = 'none';
  containerShift.style.bottom = '112px';
};


var clipboardButton = document.querySelector('#clipboard');
var clipboardPage = document.querySelector('#clipboard-page');
var walletButton = document.querySelector('#wallet');
var transactions2Page = document.querySelector('#transactions2-page');

clipboardButton.addEventListener('click', addClipboard);

function addClipboard(){
  clipboardButton.style.borderLeft =  '2.25px solid turquoise';
  walletButton.style = 'none';
  clipboardPage.style.display = 'block';
  transactions2Page.style.display = 'none';
}

wallet.addEventListener('click', addWallet);

function addWallet(){
  walletButton.style.borderLeft =  '2.25px solid turquoise';
  clipboardButton.style = 'none';
  transactions2Page.style.display = 'block';
  clipboardPage.style.display = 'none';
}
