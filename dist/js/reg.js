"use strict";$(".meg i").on("click",function(){$(this).hasClass("act")?$(this).removeClass("act"):$(this).addClass("act")}),$(".input input").blur(function(){""==$(".input input").val()?$(".err_tip").css("display","block").children("span").html("请输入密码").removeClass("islog"):/^\w{6,}$/.test($(".input input").val())?$(".err_tip").css("display","none").addClass("islog","true"):$(".err_tip").css("display","block").children("span").html("请输入正确的密码").removeClass("islog")}),$(".sib input").on("click",function(){var s=$("#user").val(),i=$(".iplist .input input").val();$(".meg i").hasClass("act")?$(".err_tip1").css("display","block").removeClass("islog"):$(".err_tip1").css("display","none").addClass("islog","true"),$(".iphone_step>p").hasClass("islog")&&$(".err_tip").hasClass("islog")&&$(".err_tip1").hasClass("islog")?location.href="php/reg.php?user="+s+"&pwd="+i:($(".iphone_step>p").hasClass("islog")||$(".iphone_step>p").css("display","block"),$(".err_tip").hasClass("islog")||$(".err_tip").css("display","block"))}),$(".listwrap #user").blur(function(){""==$(this).val()?$(".iphone_step>p").css("display","block").text("用户名不能为空").removeClass("islog"):/^[A-z]\w{4,}$/.test($(this).val())?$(".iphone_step>p").css("display","none").addClass("islog","true"):$(".iphone_step>p").css("display","block").text("用户名以字母开头至少5位，不能使用非法字符").removeClass("islog")});