var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {  
  var x = document.getElementsByClassName("mySlides");  // class selector
  if (n > x.length) {slideIndex = 1}                    // 歸0
  if (n < 1) {slideIndex = x.length}                    // 歸 最後一張

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";              // 顯示當前圖片
}

