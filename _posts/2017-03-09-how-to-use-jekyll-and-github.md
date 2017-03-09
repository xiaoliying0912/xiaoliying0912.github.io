---
layout: post
title:  "windows系统利用github和jekyll搭载环境建立博客"
date:   2017-03-09 9:31:01 +0800
categories: 教程
tag: github 笔记
---

* content
{:toc}


## windows系统利用github和jekyll搭载环境建立博客


**小丽颖**从网上得知利用jekyll搭载环境和github平台托管项目可以建立拥有自己特色的博客。于是乎开始了建立博客的道路，在网上查阅了众多经验后自己仍然踩了很多坑，真的是很多坑。还好利用Google加上自己的聪明才智都跳出来了哈哈。大部分是因为软件版本、技术的升级、网络环境的影响、设计方案的变化、操作顺序的不当而引起。现在我就balabala给你们。速度快的话真的可以1个小时就搞定，虽说我查阅资料加上跳坑花了一天多的时间。。。。。。希望你们看了我这篇经验可以快速建立一个自己的博客。少跳一些坑。。。
(注：本经验仅针对Windows系统。其他系统请参考别的经验。系统不同所用的命令也有些不同) 

-------------------

[TOC]


### 一、注册github、安装github for windows

- 到GIthub的官方网站注册账户，注册（sign up）登录（sign in）记住自己的账号密码，以后会经常使用的。 需要的宝宝可以自己从我的百度云下载安装或者从官网下载
- 安装github for windows软件。在这里我直接给你们个下载链接吧，
> 我的百度云链接：http://pan.baidu.com/s/1i50tAG9 密码：ycxy          
> 官网下载链接: https://git-for-windows.github.io/

 下载安装好了之后登陆自己的github账号就可以了。登录后先暂且放那待会再使用。正常对多出两个图标一个是github    一个是github shell（github的命令行工具）


### 二、搭载jekyll环境（仅适用Windows系统）

indows系统搭载jekyll环境需要安装3种东西。我的电脑是win7 64的。所以软件安装需要下载对应的64位的软件（不要下载错了。我之前下载错了后续安装进行不了。。。）这3样东西分别是rubyinstaller(x64)    rubygems    DevKit(x64)  
对于rubyinstallers的安装尽量不要选择低版本的。容易出错。我的用的是2.3.3版本的。同样我把我自己下载下来的用百度云分享给你们。里面还有一个notepad++软件也一起装了吧。以后遇到.html  .css  .yml  .md  等格式的文件都可以用它来打开。
>百度云盘链接：http://pan.baidu.com/s/1c2b1ys4 密码：8dr2      
  >Ruby和devkit的官网下载地址：http://rubyinstaller.org/downloads/      
  >Rubygems官网下载地址https://rubygems.org/pages/download

#### 1、	安装ruby

   ![安装ruby]({{ '/styles/images/picture/1489041165470.png' | prepend: site.baseurl  }})
   
  **注意：这里一定要勾选添加到环境变量PATH**
  ![安装ruby2]({{ '/styles/images/picture/1489041266392.png' | prepend: site.baseurl  }})
  
  安装完成后打开终端 输入ruby –v 测试是否成功
    
     ruby -v

	 
#### 2、	安装rubygems

windows下下载ZIP格式较为方便，下好后解压到本地任意路径，下面以 C:\rubygems-2.6.10 代替你解压的路径。 打开windows的cmd终端（按win+R快捷键打开“运行”，输入cmd，确定），输入命令:

      cd C:\rubygems-2.6.10    //如果你没有解压在C盘，需切换到其他盘写D: 回车，然后输入d盘的路径。回车。
      ruby setup.rb
	  
	  
 安装完成后输入 gem –v 测试是否成功
 

     gem -v   //如果显示版本号则安装成功
	 
	 
#### 3、	安装Devkit 
 
*（这个也要装不然后面装一些插件也会出错要求安装这个东东）*
我们将下载好的devkit解压到某个文件夹：
打开DevKit-mingw64-64-4.7.2-20130224-1432-sfx (1).exe 解压路径自己选择即可
![安装devkit]({{ '/styles/images/picture/1489041789298.png' | prepend: site.baseurl  }})


解压完毕后进入到加压文件的命令行目录，输入命令ruby dk.rb init,如下：

     cd c:\devkit
     ruby dk.rb init
	 
	 
提示信息告诉我们需要修改config.yml文件，于是我们打开该config.yml文件，于是我们打开C：\devkit  这个路径，找到里面的config.yml 


![修改config]({{ '/styles/images/picture/1489041896234.png' | prepend: site.baseurl  }})


在---下面加入的内容如下：

    -C:/Ruby23
    -C:/Ruby23
	
	
保存后关闭然后在命令行里继续输入

    ruby dk.rb install
	
	
到此。Ruby   rubygems   devkit  全部安装成功。Jekyll环境搭载完毕。

### 三、下载jekyll 模板 

上传之后就可以看到一个简单博客就生成了。学会了上传的用法之后就可以更改模板里的一些内容上传自己的文章了。下面介绍github如何上传文件 

#### 1、建立自己的项目（仓库）

进入github官网


![修改config]({{ '/styles/images/picture/1489042647802.png' | prepend: site.baseurl  }})


我们点击右上角的+号即可new repository  新建立一个项目


![建立自己的项目]({{ '/styles/images/picture/1489042663311.png' | prepend: site.baseurl  }})


因为是要建立博客，所以项目名字那里要用自己的用户名来命名。我的用户名是xiaoliying0912,所以我输入xiaoliying0912.github.io   
https://xiaoliying0912.github.io   这个地址就是我建立好的博客地址。如果是其他项目这里不做限制，项目名字可以任意命名。下面的README选上。
**（注：   .github.io一定要加，一定要用自己的用户名来命名。 ）**


#### 2、	克隆仓库

进入到刚刚建好的项目里。点击红色圈的那个地方把项目地址复制下来。

![建立自己的项目]({{ '/styles/images/picture/1489042764803.png' | prepend: site.baseurl  }})![Alt text](./)


打开安装github for windouw时生成的图标gitshell 后是下面的界面（master后面的数字表示的是我有些改动还没处理。所以你们可能和我不一样。暂且不用管。）


![建立自己的项目]({{ '/styles/images/picture/1489042791237.png' | prepend: site.baseurl  }})![Alt text](./)


clone有以下两种方法，第一种是https，通过直接输入账号密码的格式提交代码；第二种是ssh，需要提前配置SSH，设置ssh的方法自行Google。之后可直接push代码。我这里xiaoliying0912是我自己的用户名。要更换为你自己的用户名；


![建立自己的项目]({{ '/styles/images/picture/1489043153641.png' | prepend: site.baseurl  }})![Alt text](./)


成功之后可以按照上面的路径打开本地的文件夹。你会发现github 文件夹下多了一个你刚刚克隆的项目。


#### 3、	下载jekyll 模板

http://jekyllthemes.org/  大家可以在这里下载所需要的模板。选择download即可。如果下载速度太慢则可以把项目地址复制下来粘贴到[码市](https://coding.net/ )这里。注册个账号从这里下载.这块如果不会操作自行google。
把下载下来的模板解压后的文件放到你本地克隆的仓库里。


![建立自己的项目]({{ '/styles/images/picture/1489043496877.png' | prepend: site.baseurl  }})![Alt text](./)


### 四、 安装jekyll

#### 1、更换源
对于Window则打开CMD窗口
查看源：

     gem source
移除源：

     gem source --remove https://rubygems.org/

添加源：

     gem source –add https://gems.ruby-china.org/

*（注：有的教程添加的是淘宝源，现淘宝源已不可用。改为China源；注意org后面要有 / 不然会出错。）*
#### 2、安装jekyll 
首先打开本地仓库中的_config.yml文件。在末尾处添加如下命令。保存关闭
 

    gems:
	    - jekyll-paginate
	    - jekyll-gist

#### 3、安装jekyll

    gem install jekyll
   

#### 4、 安装paginate

    gem install jekyll-paginate
    
####  5、安装gist 

    gem install jekyll-gist
#### 6.启动jekyll服务

    cd c:\Users\GMI\Documents\Github\xiaoliying0912.github.io 
    jekyll serve 
    
  *cd后是你的项目所在路径*
  下图表示jekyll已启动成功，不要关闭
  
  
 ![建立自己的项目]({{ '/styles/images/picture/1489047194438.png' | prepend: site.baseurl  }}) 
 
  
如果一切顺利，通过在浏览器地址栏输入 http://localhost:4000/（有的是这个地址，如果不是上面的图图出来什么地址就到浏览器里输入什么地址） 回车就已经可以看到自己网站的模样啦。
只要 jekyll serve 服务开着，你的本地仓库文件有任何更新，本地网站刷新都能马上看到，欧耶！
### 五、上传本地项目到github上

#### 1.	配置git用户名和邮箱

    git config --global user.name "username"  //username替换成你的用户名
    git config --global user.email "email"  //email替换成你的邮箱
	
	
#### 2.	配置SSH   

    ssh -keygen -t rsa -C"email"  //邮email 替换成你的邮箱
	
	
一路回车到命令完成，win7系统默认在文件夹C:\Users\{你的用户名}\.ssh ，该文件夹有id_rsa（私钥） 和 id_rsa.pub（公钥） 两个文件。将id_rsa.pub内容复制到自己的Github主页的Settings -> SSH keys，添加完毕即可。
#### 3. 提交

    cd c:\Users\GMI\Documents\GitHub\xiaoliying0912.github.io
    git add .
    git commit -m "提交简介"  
    git remote add master 项目地址.git
	
	
 >（注：cd 后面是你的本地项目的路径，add和点之间有一个空格）
>如果执行git remote add master 项目地址.git 出现如下错误(master有的教程是origin。)

    fatal:remote origin already exists      //这里的master有的经验是origin
	
	
  则执行以下语句
  

    git remote rm master
	
 
在执行

    git remote add master 项目地址.git
	

在执行git push origin master时，报错：

    error:failed to push som refs to.......
	
    
则执行以下语句：

    git pull origin master  

	
**意思是先把远程服务器github上面的文件拉下来，在push上去）
结束之后就可以在浏览器中输入你的地址访问了。https://xiaoliying0912.github.io**

这里替换成你的即可。这就是你的域名

## 参考

  [1]http://www.voidcn.com/blog/u012882134/article/p-6058356.html
  
  [2]http://playingfingers.com/2016/03/26/build-a-blog/#jekyll-1
  
  [3]http://www.cnblogs.com/findingsea/archive/2012/08/27/2654549.html#3616240
  -----------
  



 

