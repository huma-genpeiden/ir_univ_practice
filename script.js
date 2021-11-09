document.addEventListener('scroll',function(){
  const scrollY = window.pageYOffset;
  
  if (scrollY > 0) {
    document.getElementById('header-container').classList.add('active');
  } else {
    document.getElementById('header-container').classList.remove('active');
  }
});

const targetElement = document.querySelectorAll(".bicycle-contens");
document.addEventListener("scroll",function () {
for (let i = 0; i < targetElement.length; i++) {
  const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*.4
  if(window.innerHeight > getElementDistance) {
    targetElement[i].classList.add("show");
  }
  }
});


$(function() {

  // 変化させる要素
  var elem = $(".contens-title h1");
  // ページトップからの要素の高さ
  var elemO = elem.offset().top;
  // 変化させる要素の高さ
  var elemH = elem.height();
  // ウィンドウの高さ
  var windowH = $(window).height();

  $(window).on("scroll", function() {
    
    // スクロールした値
    var windowS = $(window).scrollTop();

    // 要素が半分見えたら表示して、要素がウィンドウから半分消えたら非表示にする
    if(windowS > elemO - windowH + (windowH / 2) && windowS < elemO + elemH - (elemH / 2)){
      elem.addClass("anime");
    } 
    
  });

});