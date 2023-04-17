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

// 혜택 슬라이드
let index = 1;
const slide = document.getElementsByClassName('slide');
const position = document.getElementsByClassName('position');
const bar = document.getElementsByClassName('bar');
const play = document.getElementsByClassName('btn-play')[0];
const pause = document.getElementsByClassName('btn-pause')[0]

// 정방향 자동실행
let interval = setInterval(slideBenefit, 5000);

function playSlide(){
    setInterval(slideBenefit, 5000);
    play.style.display = 'none';
    pause.style.display = 'block';
}

function pauseSlide(){
    clearInterval(interval);
    pause.style.display = 'none';
    play.style.display = 'block';
}
// 정방향
function slideBenefit(){
    clearInterval(interval);
    play.style.display = 'block';
    pause.style.display = 'none';
    let currentSlide = slide[index];
    let previousSlide;
    if(index == 0){
        previousSlide = slide[5];
    }else{
        previousSlide = slide[index-1];
    }

    currentSlide.style.zIndex = 1;
    currentSlide.children[0].children[0].style.cssText = 'opacity: 1; top: 0';
    currentSlide.children[0].children[1].style.cssText = 'opacity: 1; left:300px';

    previousSlide.style.zIndex = 0;
    previousSlide.children[0].children[0].style.cssText = 'opacity: 0; top: 100px';
    previousSlide.children[0].children[1].style.cssText = 'opacity: 0; left: 450px';

    for(let i = 0 ; i < bar.length ; i++){
        bar[i].style.backgroundColor = '#ededed';
    }
    bar[index].style.backgroundColor = '#503396';

    document.getElementById('cnum').innerHTML = index+1;
    index = (index + 1) % 6;
}

// 역방향
function backSlideBenefit(){
    clearInterval(interval);
    play.style.display = 'block';
    pause.style.display = 'none';
    if(index == 0){
        slide[index].style.zIndex = 0;
        slide[index].children[0].children[0].style.cssText = 'opacity: 0; top: 100px';
        slide[index].children[0].children[1].style.cssText = 'opacity: 0; left: 450px';

        slide[5].style.zIndex = 1;
        slide[5].children[0].children[0].style.cssText = 'opacity: 1; top: 0px';
        slide[5].children[0].children[1].style.cssText = 'opacity: 1; left: 300px';

        index = 5;
    }else{
        slide[index-1].style.zIndex = 0;
        slide[index-1].children[0].children[0].style.cssText = 'opacity: 1; top: 0px';
        slide[index-1].children[0].children[1].style.cssText = 'opacity: 1; left: 300px';
        
        slide[index].style.zIndex = 1;
        slide[index].children[0].children[0].style.cssText = 'opacity: 0; top: 100px';
        slide[index].children[0].children[1].style.cssText = 'opacity: 0; left: 450px';
        
        index--;
    }

    for(let i = 0 ; i < bar.length ; i++){
        bar[i].style.backgroundColor = '#ededed';
    }
    bar[index].style.backgroundColor = '#503396';

    document.getElementById('cnum').innerHTML = index+1;
}
