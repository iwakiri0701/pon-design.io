window.addEventListener('scroll', ()=> {
    //スクロール高さ取得
    let scroll = window.pageYOffset;
    //px単位で色の変更開始位置指定
    if(scroll >= 20) {
        window.document.getElementById('header').style.backgroundColor='#21054D';
    }else {
        window.document.getElementById('header').style.backgroundColor='transparent';
    }
});

// スライダー

$('.slider').slick({
  infinite: true, //スライドのループを有効
  arrows: true, //前へ、次への矢印ボタンの有無
  fade: true, //スライドの切り替えをフェードに
  speed: 2000, //アニメーションの切り替えスピード
  autoplaySpeed: 3000, //自動再生時のスライドの静止時間
  autoplay: true, //スライダーの自動再生
  dots: true,
  
});


$(function(){
    var topBtn=$('#icon-top');
    topBtn.hide();
    
     
    
    //◇ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>500){
    
        //---- 画面を500pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
    
      }else{
    
        //---- 画面が500pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
    
      }
    });
    
     
    
    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    
    });
    
    
    });



    // ハンバーガー
    $(function () {
      $('.sp-btn, .sp-nav li').on('click', function () {
          $('.sp-nav').fadeToggle();
          $('.sp-btn').toggleClass('open');
      });
    });


     
  