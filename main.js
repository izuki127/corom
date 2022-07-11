$(function(){    
  $('.explanation').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
    slidesToShow: 1,        // 表示するスライド数を設定
    slidesToScroll: 1,      // スクロールするスライド数を設定
    arrows: true,           //左右の矢印
    pauseOnHover: false,    //ホバーしたときにスライドを一時停止しない
    variableWidth:true,
  });
});

$(function(){    
  $('.usebox').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
    slidesToShow: 5,        // 表示するスライド数を設定
    slidesToScroll: 1,      // スクロールするスライド数を設定
    arrows: true,           //左右の矢印
    pauseOnHover: false,    //ホバーしたときにスライドを一時停止しない
    variableWidth:true,
  });
});