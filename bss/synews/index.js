$(function(){
		headerSearch();	
		bookmarkTitle();	
		selOne();
		selTwo();
		wheelMap();
});
function bookmarkTitle(){
	var 	aH = $('#bookmark h3'),
			aLi = $('#bookmark .list_swit'),
			aUl = $('#bookmark .list_swit_box .list_img_txt'),
			nNum = 0,
			height = aUl.height(),
			liH = aUl.find('li').outerHeight(),
			interval = 4000,
			timer;
	$('.list_swit_box').css({height:height});
	for(var i=0; i<aUl.length; i++){
			var txt = aUl[i].innerHTML;
			aUl[i].innerHTML += txt + txt ;
	}
	timer = setInterval(bookTimer,interval);
	$('#bookmark').hover(function(){clearInterval(timer); },function(){ timer = setInterval(bookTimer,interval); });
	aH.hover(function(){
		clearInterval(timer);
		nNum = $(this).index();
		this.t = setTimeout(function(){
			aH.removeClass('sel').eq(nNum).addClass('sel');
			aLi .hide().eq(nNum).find('.list_swit_box .list_img_txt').css("top", 0).end().show();
		},200);
	},function(){
		clearTimeout(this.t);
	});
	function bookTimer(){
		var obj = $('#bookmark .list_swit_box').eq(nNum).find('.list_img_txt');
		var top = obj.position().top;
		obj.animate({'top': top-liH},1000, function(){
			var tops = obj.position().top;
			if(tops<=-height){
				obj.css("top", tops+height);
			}
		});						
	}
}
/*header 搜索*/
function headerSearch(){
	var yjf_section = $('.search section');
	var search_select = $('#search_select');
	yjf_section.click(function(){
		search_select.css('display', 'block');
		var lis = search_select.find('a');
		$(document).on("click.serch", function(id){
			switch(id.target){
				case lis[0]:
					yjf_section.html( $(lis[0]).html() + '<span></span>');
					search_select.css('display', 'none');
					$(document).unbind("click.serch");
					break;
				case lis[1]:
					yjf_section.html( $(lis[1]).html() + '<span></span>');
					search_select.css('display', 'none');
					$(document).unbind("click.serch");
					break;
				case yjf_section[0]:
					break;
				default:						
					search_select.css('display', 'none');
					$(document).unbind("click.serch");
			}
		});
	});
}

/*bookmark*/
function bookmarkTitle(){
	var aH = $('#bookmark h3');
	var aUl = $('#bookmark ul');
	var timer;
	aH.each(function(id){
		$(this).on('mouseover', function(){
			timer = setTimeout(function(){
				aH.each(function(ids){
					if( ids == id ){
						$(this).addClass('sel');
						$(aUl[ids]).show();
						return;
					}
					$(this).removeClass('sel');
					$(aUl[ids]).hide();
				});
			}, 300);
		});
		$(this).on('mouseout', function(){
			clearTimeout(timer);
		});
	});
}

function selOne(){
	var aTitleA = $('#sel_one .bookmark_wide').find('a');
	var aTxtDl = $('#sel_one').find('dl');
	var timer;
	aTitleA.each(function(id){
		$(this).on('mouseover', function(){
			timer = setTimeout(function(){
				aTitleA.each(function(ids){
					if( ids == id ){
						$(this).addClass('sel');
						$(aTxtDl[ids]).show();
						return;
					}
					$(this).removeClass('sel');
					$(aTxtDl[ids]).hide();
				});
			}, 300);
		});
		$(this).on('mouseout', function(){
			clearTimeout(timer);
		});
	});

}

function selTwo(){
	var aTitleA = $('#sel_two .bookmark_wide').find('a');
	var aTxtDl = $('#sel_two').find('dl');
	var timer;
	aTitleA.each(function(id){
		$(this).on('mouseover', function(){
			timer = setTimeout(function(){
				aTitleA.each(function(ids){
					if( ids == id ){
						$(this).addClass('sel');
						$(aTxtDl[ids]).show();
						return;
					}
					$(this).removeClass('sel');
					$(aTxtDl[ids]).hide();
				});
			}, 300);
		});
		$(this).on('mouseout', function(){
			clearTimeout(timer);
		});
	});

}

function wheelMap(){
	var contentBox = document.getElementById('imgArr');     // 轮播图父级
	var contentBottom = document.getElementById('yuandian'); // 圆点父级
	var rightBox = document.getElementById('thumbnail');    // 右侧父级
	var rightLayer = document.getElementById('kuang');      // 右侧红框
	var contentChild = contentBox.children;
	var contentArr = [];
	var rightChild = rightBox.getElementsByTagName('img');  // 右侧图片
	var contentWidth = contentBox.offsetWidth;
	var rightHeight = rightBox.offsetHeight;
	var classId = 0;
	var pId = 0;
	var newClassId = 0;
	var newPId = 0;
	var timer = null;
	var interval = 3000; // 轮播间隔时间 毫秒
	var animate = 400;   // 动画执行速度 毫秒
	if(contentChild.length !== rightChild.length) return alert(轮播图内容不统一);
	for(var i=0; i<contentChild.length; i++){
		contentArr.push(contentChild[i].getElementsByTagName('img'));
		rightChild[i].rightid = i;
	}
	init();
	function init(){
		contentArr[classId][pId].style.left = contentWidth + 'px';
		contentArr[newClassId][newPId].style.left = 0;
		rightLayer.style.top = newClassId * (rightHeight / rightChild.length) + 'px';
		addDot();
		contentBottom.onclick = function(e){
			var e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName.toLowerCase() == 'span'){
				newPId = target.getAttribute('dotid');
				addRoll();
			}
		};
		rightBox.onclick = function(e){
			var e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName.toLowerCase() == 'img'){
				newClassId = target.rightid;
				newPId = 0;
				addRoll();
			}
		};
		contentBox.onmouseover = rightBox.onmouseover = contentBottom.onmouseover = function(){
			clearInterval(timer);
		};
		contentBox.onmouseout = rightBox.onmouseout = contentBottom.onmouseout = function(){
			timer = setInterval(timeRoll, interval);
		};
		timer = setInterval(timeRoll, interval);
	}
	function addDot(){
		var dots = contentBottom.children;
		if( newPId === 0 ){
			var contentBottomHtml = '';
			for(var i=0; i<contentArr[newClassId].length; i++){
				contentBottomHtml += '<span dotid="'+ i +'" class="'+ ( i==newPId ? 'wheelSel' : '' ) +'"></span>';
			}
			contentBottom.innerHTML = contentBottomHtml;
			contentBottomHtml = null;
		}else{
			dots[pId].className = '';
			dots[newPId].className = 'wheelSel';
		}
	}
	function timeRoll(){
		newClassId = classId;
		newPId = pId;
		newPId++;
		newPId = newPId % contentArr[classId].length;
		if( newPId === 0 ){
			newClassId++;
		}
		newClassId = newClassId % contentArr.length;
		addRoll();
	}
	function addRoll(){
		var oldClass = classId;
		var oldId = pId;
		var target = contentWidth;
		if(newClassId<oldClass || newClassId==oldClass && newPId < oldId){
			contentArr[newClassId][newPId].style.left = -target + 'px';
		}else{
			target = -target;
		}
		myMove(contentArr[classId][pId], 'left', target, animate, function(){
			contentArr[oldClass][oldId].style.left = contentWidth + 'px';
		});
		myMove(contentArr[newClassId][newPId], 'left', 0, animate);
		myMove(rightLayer, 'top', newClassId * (rightHeight / 3), animate-150);

		addDot();
		classId = newClassId;
		pId = newPId;
	}
	function myMove(obj, attr, target, times, fn){
	if( obj.timer ) clearInterval(obj.timer);
	var startTime = new Date();
	var old = parseFloat( getCssStyle(obj, attr) );
	var interval = 30;
	var step = (target - old) / times * interval;
	if( !step ) return;
	obj.timer = setInterval(function(){
		var endTime = new Date();
		var newAttr = parseFloat( getCssStyle(obj, attr) ) + step;
		if(step > 0 && newAttr >= target || step < 0 && newAttr <= target || endTime - startTime >= times){
			newAttr = target;
		}
		obj.style[attr] = newAttr  + 'px';
		if(newAttr == target){
			clearInterval(obj.timer);
			obj.timer = null;
			fn && fn();
		}
	}, interval);
}
function getCssStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj, null )[attr];
}
}
