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
  
  <h1>What is fakeLoader.js</h1>
<p>
fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.
</p>
<h3>Check out the <a href="http://joaopereirawd.github.io/fakeLoader.js/demo/demo1.html" target="_blank">Demo</a></h3>
<h1>Bower?</h1>
<p>Me too :) fakeLoader.js is available as a Bower package. Just run</p>
<pre>bower install fakeloader</pre>

<h1>1. Include in HTML Document</h1>
<p style="margin:0px;">Include in the top of your &lt;body&gt; tag </p>
<pre><p>&lt;div id="fakeLoader"&gt;&lt;/div&gt;</p></pre>
</br></br>
<h1>2. Include Styles</h1>
<p>Inside &lt;head&gt; tag </p>
<pre><p>&lt;link rel="stylesheet" href="yourPath/fakeLoader.css"&gt;</p></pre>
<h1>3. Include Folowing Libraries</h1>
<p>JQuery reference and the fakeLoader.js</p>
<pre>
<p>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"&gt;</p><p>&lt;script src="yourPath/fakeLoader.min.js"&gt;</p>
</pre>

<h1>4. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;script type="text/javascript"&gt;
        $("#fakeLoader").fakeLoader();
    &lt;/script&gt;
</code>
</pre>

<h1>5. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    $("#fakeLoader").fakeLoader({
    
            timeToHide:1200, //Time in milliseconds for fakeLoader disappear
            zIndex:999, // Default zIndex
            spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors
            imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
            
    });
     &lt;/script&gt;
</code>
</pre>