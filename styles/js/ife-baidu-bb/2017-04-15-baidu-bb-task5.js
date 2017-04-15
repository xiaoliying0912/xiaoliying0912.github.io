/* 
 * 思路：
 * 1、设置变量
 * 2、为四个按钮添加点击事件绑定函数、判断输入字符
 * 3、将input中获取的数值存入数组datalis.
 * 4、遍历数组datalis.将值赋给li的属性hight。用于改变li的高度。
 * 5、设置排序函数
 */
window.onload=function(){ 
	var num=document.getElementById("num");
	var left_in=document.getElementById("left_in");
	var right_in=document.getElementById("right_in");
	var left_out=document.getElementById("left_out");
	var right_out=document.getElementById("right_out");
	var display=document.getElementById("display");
	var sort=document.getElementById("sort");
	var random=document.getElementById("randomSort");
	var datalis=[];   //用于存放表单输入的数
	var state=[];
	
	function formReset(){   //重置表单的内容。
		document.getElementById("myform").reset();
	}
	
	left_in.onclick=function(){   //为左侧入按钮绑定事件
		if(num.value==""){        //判断是否为空
			alert("值不能为空");    
		}else if(!isNaN(num.value)){    //判断是否为数字
				if(10<=num.value && num.value<=100){     //判断输入的值是否在10-100之间
					if(display.getElementsByTagName('li').length<60){	  //将队列的子元素数量限制在60个以内.
							datalis.unshift(num.value);      //添加表单的值到数组的开头
							display.innerHTML = "" ;
							for(var i=0;i<datalis.length;i++)    //遍历数组创建li，改变li的样式
							{
								display.innerHTML += "<li>" + "</li>" ;
							    var dataul = display.querySelectorAll("li");  //获取存取数据的所有节点
								dataul[i].style.height=datalis[i]+"px";  //li的样式高度=input里获取的数值
							}
							formReset();
 					}
					else{ alert("队列长度不得超过60个"); }
				}
				else{alert("请输入值为10-100的数字");}
			}
			else{alert("请输入数字");}
	};
	right_in.onclick=function(){   //为右侧入按钮绑定事件
		if(num.value==""){        //判断是否为空
			alert("值不能为空");    
		}else if(!isNaN(num.value)){    //判断是否为数字
				if(10<=num.value && num.value<=100){     //判断输入的值是否在10-100之间
					if(display.getElementsByTagName('li').length<60){	
							datalis.push(num.value);
							display.innerHTML = "" ;
							for(var i=0;i<datalis.length;i++)
							{
								display.innerHTML += "<li>" + "</li>" ;
							    var dataul = display.querySelectorAll("li");  //获取存取数据的所有节点
								dataul[i].style.height=datalis[i]+"px";  //li的样式高度=input里获取的数值
							}
							formReset();
 					}
					else{ alert("队列长度不得超过60个"); }
				}
				else{alert("请输入值为10-100的数字");}
			}
			else{alert("请输入数字");}
	};
	left_out.onclick=function(){   //为左侧出按钮绑定事件，从左侧移除节点
		alert(datalis[0]);
		datalis.shift(num.value);   
		display.removeChild(display.childNodes[0]); 
		formReset();
	};
	right_out.onclick=function(){   //为右侧出按钮绑定事件,从右侧移除节点
		var lastchild=display.lastChild;
		alert(datalis.pop());
		display.removeChild(lastchild); 
		formReset();
	};
	display.onclick=function(event){
		if(event.target.nodeName.toLowerCase()=="li"){
			display.removeChild(event.target);
       }
	};
	function sortNum(arr){   //设置冒泡排序函数
		 for (var i = arr.length-1; i > 0; i--) {
	         for(var j = 0; j < i; j++) {
	             if (arr[j] > arr[j+1]) {
			        var temp = datalis[j];
			        arr[j] = arr[j+1];
			       arr[j+1] = temp;         
	        		state.push(JSON.parse(JSON.stringify(arr)));   //将每一次交换的数组存到state中，state是数组的数组
	             }
	         }
	     }
	}
	function randomSort(){   //设置一个生成随机数的函数，随机生成10-100之间整数
  		for(var x=0; x<19; x++){
   		 datalis[x] = Math.floor(Math.random()*(100-10)+10);
		}
     }
	random.onclick=function(){   //设置随机排序函数点击事件
		randomSort();
		display.innerHTML = "" ;
		for(var i=0;i<datalis.length;i++)
		{
			display.innerHTML += "<li>" + "</li>" ;
		    var dataul = display.querySelectorAll("li");  //获取存取数据的所有节点
			dataul[i].style.height=datalis[i]+"px";  //li的样式高度=input里获取的数值
		}
	};
	sort.onclick=function (){
         sortNum(datalis);    //调用冒泡排序函数，对数组内的数进行排序
         var int = setInterval(forSortRender, 150);  //设置调用函数间隔时间
	 	 function forSortRender(){
			  var s = state.shift();  //删除并返回数组的第一个元素
			  display.innerHTML = "" ;
			  if (s !== undefined) {
			    for(var m = 0; m < s.length; m++){
			    display.innerHTML += "<li>" + "</li>" ;
			    var dataDiv = display.querySelectorAll("li");    //获取存取数据的所有节点
			    dataDiv[m].style.height = s[m] + "px";  //给每个数据的li设定样式
		        }
		     } 
			  else{
			  	display.innerHTML = "" ;
					for(var i=0;i<datalis.length;i++)    //遍历数组创建li，改变li的样式
					{
						display.innerHTML += "<li>" + "</li>" ;
					    var dataul = display.querySelectorAll("li");  //获取存取数据的所有节点
						dataul[i].style.height=datalis[i]+"px";  //li的样式高度=input里获取的数值
					}
			    window.clearInterval(int);
		  }
		}
	 };
};

	