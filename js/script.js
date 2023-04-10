$(function(){
    // 광고버튼 작동
    $('.top-adver-close').click(function(){
        $('#top-adver').fadeOut(300);
    })

    // header 넣었다 뻈다
    $('.header-gnb>li:not(:nth-child(5))>a').mouseover(function(){
        $('.header-hide').removeClass('on');
        $('.header-gnb>li>a').removeClass('on')
        $('.header-gnb>li>.header-lnb').removeClass('on');
        $('.header-hide').addClass('on');
        $(this).addClass('on')
        $(this).next('.header-lnb').addClass('on');
    })
    $('.header-hide').mouseleave(function(){
        $('.header-hide').removeClass('on');
        $('.header-gnb>li>a').removeClass('on')
        $('.header-gnb>li>.header-lnb').removeClass('on');
    })


}); // jQuery

const quickView = document.getElementById('quick-view');
const quickSearch = document.getElementById('quick-search');
const quickMypage = document.getElementById('quick-mypage');
const quickSearchMenu = document.getElementById('quick-search-menu');
// 퀵뷰 오픈
function quickViewOpen(){
    quickMypage.classList.remove('on');
    quickSearch.classList.remove('on');
    quickView.classList.toggle('on');
}

// 퀵서치 오픈
function quickSearchOpen(){
    quickMypage.classList.remove('on');
    quickSearch.classList.toggle('on');
    quickView.classList.remove('on');
    quickSearchMenu.classList.toggle('on');
}

// 퀵마이페이지 오픈
function quickMyOpen(){
    quickMypage.classList.toggle('on');
    quickSearch.classList.remove('on');
    quickView.classList.remove('on');
}