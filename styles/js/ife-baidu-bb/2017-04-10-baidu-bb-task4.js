/* 
 * 思路：
 * 1、设置变量
 * 2、为四个按钮添加点击事件绑定函数、判断输入字符
 * 3、点击目标对象移除节点
 */
window.onload=function(){ 
	var num=document.getElementById('num');
	var left_in=document.getElementById('left_in');
	var right_in=document.getElementById('right_in');
	var left_out=document.getElementById('left_out');
	var right_out=document.getElementById('right_out');
	var display=document.getElementById('display');
	 var arr=new Array();
	left_in.onclick=function(){   //为左侧入按钮绑定事件
		if(num.value==""){
			alert("值不能为空");    
		}else if(!isNaN(num.value)){   //判断是否为数字
			var li=document.createElement('li');       //创建新节点li
			li.innerHTML=num.value;                    //将input中获取到的内容赋给新创建的节点li中
			display.insertBefore(li,display.childNodes[0]);    // 在首节点之前插入新节点
		}else{
			alert("请输入数字");
		};
	};
	right_in.onclick=function(){   //为右侧入按钮绑定事件
		if(num.value==""){
			alert("值不能为空");
		}else if(!isNaN(num.value)){
			var li=document.createElement('li');    //创建新节点li
			li.innerHTML=num.value;               //将input中获取到的内容赋给新创建的节点li中
			display.appendChild(li);              // 在节点之前后追加新节点
		}else{ 
			alert("请输入数字");
		};
	};
	left_out.onclick=function(){   //为左侧出按钮绑定事件，从左侧移除节点
		alert(display.childNodes[0].innerHTML);
		display.removeChild(display.childNodes[0]);   
	};
	right_out.onclick=function(){   //为右侧出按钮绑定事件,从右侧移除节点
		var lastchild=display.lastChild;
		alert(lastchild.innerHTML);
		display.removeChild(lastchild); 
	};
	display.onclick=function(event){
		if(event.target.nodeName.toLowerCase()=="li"){
			display.removeChild(event.target);
       }
	};
};
	