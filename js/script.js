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

    // 탭리스트 on 걸기
    $('.tab-flex>li').click(function(){
        $('.tab-flex>li').removeClass('on');
        $(this).addClass('on');
    })

    // 탭랭크 포스터 바꾸기
    $('.tab-list>ul>li>a').hover(function(){
        let imgsrc = $(this).data('imgsrc');
        $('#poster').attr('src', imgsrc);
    })

    // 박스오피스 상세설명 띄우기
    $('.office-moviebox').hover(function(){
        $(this).find('.office-review').stop().fadeToggle(200);
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
    quickSearchMenu.classList.remove('on');
    quickView.classList.toggle('on');
}

// 퀵서치 오픈
function quickSearchOpen(){
    quickMypage.classList.remove('on');
    
    quickView.classList.remove('on');
    quickSearch.classList.toggle('on');
    quickSearchMenu.classList.toggle('on');
}

// 퀵마이페이지 오픈
function quickMyOpen(){
    quickSearch.classList.remove('on');
    quickView.classList.remove('on');
    quickSearchMenu.classList.remove('on');
    quickMypage.classList.toggle('on');
}


// 퀵 탭뷰 포스터 고정
const poster = document.getElementById('poster');
const one = document.getElementsByClassName('one');
const tablist = document.getElementsByClassName('tab-list');
// 퀵 탭리스트 전환
function tablistOpen(e){
    for(let i = 0 ; i < tablist.length ; i++){
        tablist[i].classList.remove('on');
    }
    tablist[e].classList.add('on');
    poster.src = one[e].dataset.imgsrc;
}

let index = 1;
const slide = document.getElementsByClassName('slide');
const position = document.getElementsByClassName('position');
const bar = document.getElementsByClassName('bar');
function slideBenefit(){
    if(index == 0){
        slide[index].style.zIndex = 1;
        slide[index].children[0].children[0].style.opacity = 1;
        slide[index].children[0].children[0].style.top = 0;
        slide[index].children[0].children[1].style.opacity = 1;
        slide[index].children[0].children[1].style.left = '300px';
        slide[5].style.zIndex = 0;
        slide[5].children[0].children[0].style.opacity = 0;
        slide[5].children[0].children[0].style.top = '100px';
        slide[5].children[0].children[1].style.opacity = 0;
        slide[5].children[0].children[1].style.left = '450px';

    }else{
        slide[index-1].style.zIndex = 0;
        slide[index-1].children[0].children[0].style.opacity = 0;
        slide[index-1].children[0].children[0].style.top = '100px';
        slide[index-1].children[0].children[1].style.opacity = 0;
        slide[index-1].children[0].children[1].style.left = '450px';
        slide[index].style.zIndex = 1;
        slide[index].children[0].children[0].style.opacity = 1;
        slide[index].children[0].children[0].style.top = 0;
        slide[index].children[0].children[1].style.opacity = 1;
        slide[index].children[0].children[1].style.left = '300px';
    }

    for(let i = 0 ; i < bar.length ; i++){
        bar[i].style.backgroundColor = '#ededed';
    }
    bar[index].style.backgroundColor = '#503396';

    document.getElementById('cnum').innerHTML = index+1;
    index++;
    if(index == 6) index = 0;
}
function backSlideBenefit(){
    if(index == 0){
        slide[index].style.zIndex = 1;
        slide[index].children[0].children[0].style.opacity = 0;
        slide[index].children[0].children[0].style.top = '0';
        slide[index].children[0].children[1].style.opacity = 0;
        slide[index].children[0].children[1].style.left = '300px';
        slide[5].style.zIndex = 0;
        slide[5].children[0].children[0].style.opacity = 0;
        slide[5].children[0].children[0].style.top = '100px';
        slide[5].children[0].children[1].style.opacity = 0;
        slide[5].children[0].children[1].style.left = '450px';

    }else{
        slide[index-1].style.zIndex = 0;
        slide[index-1].children[0].children[0].style.opacity = 1;
        slide[index-1].children[0].children[0].style.top = '0px';
        slide[index-1].children[0].children[1].style.opacity = 1;
        slide[index-1].children[0].children[1].style.left = '300px';
        slide[index].style.zIndex = 1;
        slide[index].children[0].children[0].style.opacity = 0;
        slide[index].children[0].children[0].style.top = '100px';
        slide[index].children[0].children[1].style.opacity = 0;
        slide[index].children[0].children[1].style.left = '450px';
    }

    for(let i = 0 ; i < bar.length ; i++){
        bar[i].style.backgroundColor = '#ededed';
    }
    bar[index].style.backgroundColor = '#503396';
    
    document.getElementById('cnum').innerHTML = index+1;
    index--;
    if(index == 0) index = 5;
}
