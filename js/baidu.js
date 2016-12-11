/**
 * Created by Administrator on 2016/10/11.
 */
/********skin-title********/
$(document).ready(function(){
    var src=localStorage.getItem('src');
    if(src){
        window.document.body.style.backgroundImage
            ='url('+src+')';
        window.document.body.style.backgroundRepeat
            ='no-repeat';
        window.document.body.style.backgroundSize
            ='cover';
    }
})
$('.skin-title a').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings('a').removeClass('active');
    var txt=$(this).attr('href');
    $(txt).show().siblings('div').hide();
    console.log(txt);
})
/******skin-main 换背景*******/
var li=document.querySelector('.skin-main');
    li=li.querySelectorAll('li');
    console.log(li.length);
    for(var i=0;i<li.length;i++){
        li[i].onclick=function(){
            var i=this.querySelector('i');
            var src=this.querySelector('img').getAttribute('src');
            console.log(src);
            changeBg(src);
            colcalS(src);
            for(var j=0;j<li.length;j++){
                if(li[j]==this){
                    console.log('进入')
                    i.style.display='block';
                }
                else{
                    var is=li[j].getElementsByTagName('i');
                    for(var y=0;y<is.length;y++){
                        is[y] .style.display='none';
                    }
                }
            }
        }
    }
function changeBg(a){
    $('body').css('background-image','url('+a+')');
    $('body').css('background-size','cover');
    $('body').css('background-no-repeat','no-repeat');
    $('body').css('background-attachment','fixed');
}
function colcalS(src){
    localStorage.setItem('src',src)
}
/*********skin 收起 放下*******/
$('.up').click(function(){
    $('.change-skin').slideUp();
})
$('.change-down a').click(function(){
    $('.change-skin').slideDown();
})
/**********content-box 区*********/
$('.box-title li').click(function(){
    $(this).addClass('active')
        .siblings('li').removeClass('active');
})
/*******Tab**********/
$('.box-title li a').click(function(e){
    e.preventDefault();
    var href=$(this).attr('href');
    $(href).css('display','block').siblings('div').hide();
})
/********推荐页 右边固定********/
window.onscroll=function(){
    var top=document.documentElement.scrollTop
        || window.pageYOffset || document.body.scrollTop;
    if(top>200){
        $('#go-top').fadeIn();
        $('.top-fixed').show();
    }
    else{
        $('#go-top').fadeOut();
        $('.top-fixed').fadeOut();
    }
    if(top>=300){
      //var r=document.querySelector('.recom-right')
        $('.recom-right').css('position','fixed');
        $('.recom-right').css('top',0+'px');
        $('.recom-right').css('right',315+'px');

    }
    else{
        $('.recom-right').css('position','absolute');
        $('.recom-right').css('top',10+'px');
        $('.recom-right').css('right',15+'px');

    }
}
/*******回顶部******/
    $('#go-top').click(function(){
    $('html,body').animate({scrollTop:0},500)
   })

/********样式********/
$('#go-top').mouseover(function(){
    $(this).find('i').show();
    $(this).find('i').css('display','block');
    $(this).find('span').hide();
})
$('#go-top').mouseout(function(){
    $(this).find('span').show();
    $(this).find('i').hide();
})
/**************/
$('.content').click(function(){
    $('.change-skin').slideUp();
})
$(document).ready(function(){
	$('.detail').hover(
				function(){
					$('body').css({"overflow":'hidden'});
					},function(){
					$('body').css({"overflow":'scroll'});
				
			})		
})





















