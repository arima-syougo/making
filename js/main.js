// 関数定義
function noScroll(event){
    event.preventDefault();
};


// 読み込み画面
$(window).on('load',function() {
    $('body').removeClass('loading');
    $('#loading').addClass('loaded');
    });