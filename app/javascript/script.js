/* global $*/
// let title = "javascriptが使えました";
// alert(title);

// $(document).ready(function(){
//     $('.jquery').on('click', function(){
//         $(this).css('color', 'red');
//     });
// });

$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

// swiperのオプションを定数化
const opt = {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}

// swiperを実行（初期化）
$(document).on('turbolinks:load', function(){
// document(つまり全体)にjsを働かせるための記述。turbolinks:がないと('load'のみだと)読み込み時か働かず、ページ遷移などをすると効かなくなる。
    let swiper = new Swiper('.swiper',opt);
});