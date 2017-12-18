$(function(){
	
	
//	导航栏
	if($(window).width()>992){
		$("nav li").mouseover(function(){
			$("nav li").removeClass("active");
			$(this).addClass("active");
			$(".twonav").removeClass("active");
			$(this).find(".twonav").addClass("active");
		});
		$("nav .twonav a").mouseover(function(){
			$("nav .twonav a").removeClass("active");
			$(this).addClass("active");
		});
	}
	
	
	if($(window).width()<992){
		$("nav ul").hide();
		$("nav .cd").click(function(){
			$("nav ul").slideToggle();
		});
	}
	
	
	
//	slide
	$("slide .tele").mouseover(function(){
		$("slide .popup").removeClass("active");
		$(this).next().addClass("active");
	});

	
//	nav点击效果
	$("nav ul li").click(function(){
		var index = $(this).index();
		
		if(index >= $("nav ul a").length){
			index = 0;
		}
		var top = $(".navclick:eq("+index+")").offset().top-268;
		$('html,body').animate({
			scrollTop:top
		},500);
	});
	
//	箭头动画
	if($(window).width()>800){
		$(window).scroll(function(){
			if($(window).scrollTop()+$(window).height() >$(".unscramble").offset().top ){
				$(".unscramble .right .numadd").addClass("active");	
			}else{
				$(".unscramble .right .numadd").removeClass("active");	
			}
		});
	}
	
	
//	form
	$(".butto").click(function(){
		$(".message").addClass("active");
	});
	$(".popupwindows button").click(function(){
		$(".message").addClass("active");
		
	});
	$(".x").click(function(){
		$(".message").removeClass("active");
	});
	if($(window).width()<768){
		$(".qq").click(function(){
			$(".message").addClass("active");
		});
	}
	$(".message .big .content form .label").click(function(){
		if($(this).children(".che").is(".active")){
			$(this).children(".che").removeClass("active");
			if($(this).is(".lastlax")){
				$(".qita").removeClass("active");
			}
		}else{
			$(this).children(".che").addClass("active");
			if($(this).is(".lastlax")){
				
				$(".qita").addClass("active");
				
			}
		}	
	});
	
	
//	表单检测
//console.log($(".message .big .content form").position().top);
//console.log($(".done").position().top);
//	var formheight = $(".message .big .content form").position().top;
//	$(".message .big .content form .clitj").click(function(){
//		
//		
//		
//		for(var i=0;i<$(".message .big .content form .tianxie").length;i++){
//			if($(".done:eq("+i+") input").val()==""){
//				$(".done:eq("+i+") .tianxie").addClass("active");
//				
//			}else{
//				$(".done:eq("+i+") .tianxie").removeClass("active");
//			}
//		}
//		
//		
//		
//		
//		for(var i=0;i<$(".message .big .content form .donetwo").length;i++){
//			if($(".donetwo:eq("+i+") .che").is(".active")){
//				$(".donetwo:eq("+i+") .tianxie").removeClass("active");
//			}else{
//				$(".donetwo:eq("+i+") .tianxie").addClass("active");
//			}
//		}
//		
//		
//		
//		
//		
//		if($(".doneone textarea").val()==""){
//				$(".doneone .tianxie").addClass("active");
//				
//			}else{
//				$(".doneone .tianxie").removeClass("active");
//		}
//	});
//	
//	$(".message .content form input").click(function(){
//		$(".message .content form input").removeClass("active");
//		$(".message .content form textarea").removeClass("active");
//		$(this).addClass("active");
//	});
//	$(".message .content form textarea").click(function(){
//		$(".message .content form input").removeClass("active");
//		$(this).addClass("active");
//	});
	
	
	
	
//	弹窗
	setTimeout(function(){
		$(".popupwindows").addClass("active");
	},0);
	
	$(".suoxiao").click(function(){
		$(".popupwindows").addClass("retive");
		$(this).addClass("active");
		$(".yuyues").addClass("active");
	});
	
	$(".yuyues").click(function(){
		$(".popupwindows").removeClass("retive");
		$(".suoxiao").removeClass("active");
		$(".yuyues").removeClass("active");
	});
	if($(window).width()<800){
		$(".suoxiao").click(function(){
			$(".popupwindows div:eq(0)").addClass("active");
		});
		
		$(".yuyues").click(function(){
			$(".popupwindows div:eq(0)").removeClass("active");
		});
	}
})

