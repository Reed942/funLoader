# funLoader
funLoader.js是一款轻量级的 jQuery 炫酷页面预加载Loading特效插件。它能帮助我们创建一个全屏遮罩效果的旋转loading效果来模拟页面预加载过程。
使用方法
在<head>标签中引入fakeLoader.css文件。

<link rel="stylesheet" href="yourPath/funLoader.css">
在页面底部引入jQuery和fakeLoader.min.js文件。
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js">

<script src="yourPath/funLoader.min.js">
基本使用方法：
<script type="text/javascript">
$("#funloader").funLoader();
</script>
带参数调用：
<script type="text/javascript">
$("#funloader").funLoader({
timeToHide:1200, //Time in milliseconds for fakeLoader disappear
zIndex:999, // Default zIndex
spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
bgColor:"#2ecc71", //Hex, RGB or RGBA colors
imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
}); 
</script>
可用参数
  ● timeToHidenumbers：fakeLoader消失的时间，单位毫秒。
  ● zIndex：默认的zIndex。
  ● spinner：可选的spinner：'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'。
  ● bgColor：全屏遮罩的背景颜色。可以是hex、RGB 或 RGBA 颜色值。
  ● imagePath：如果你想自定义图片，使用该选项。
  
  fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.

Check out the Demo

Bower?

Me too :) fakeLoader.js is available as a Bower package. Just run

bower install fakeloader
1. Include in HTML Document

Include in the top of your <body> tag

<div id="fakeLoader"></div>



2. Include Styles

Inside <head> tag

<link rel="stylesheet" href="yourPath/fakeLoader.css">

3. Include Folowing Libraries

JQuery reference and the fakeLoader.js

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">

<script src="yourPath/fakeLoader.min.js">


4. Basic Initialize

Include in bottom of your <body> tag


    <script type="text/javascript">
        $("#fakeLoader").fakeLoader();
    </script>

5. Options

<script type="text/javascript">


    $("#fakeLoader").fakeLoader({
        timeToHide:1200, //Time in milliseconds for fakeLoader disappear
        zIndex:999, // Default zIndex
        spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#2ecc71", //Hex, RGB or RGBA colors
        imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
        
});
 &lt;/script&gt;
