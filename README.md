# funLoader
<p>funLoader.js是一款轻量级的 jQuery 炫酷页面预加载Loading特效插件。它能帮助我们创建一个全屏遮罩效果的旋转loading效果来模拟页面预加载过程。</p>
<h3>使用方法</h3>
<p>在<head>标签中引入funLoader.css文件。</p>
<p><link rel="stylesheet" href="yourPath/funLoader.css"></p>
<p>在页面底部引入jQuery和funLoader.min.js文件。</p>
<p><script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></p>

<p><script src="yourPath/funLoader.min.js"></p>

<h4>基本使用方法：</h4>
<pre>
<p><script type="text/javascript"></p>
<p>$("#funloader").funLoader();</p>
<p></script></p>
<p></pre></p>
<h4>带参数调用：</h4>
<pre>
<p><script type="text/javascript"></p>
<p>$("#funloader").funLoader({</p>
<p>timeToHide:1200, //Time in milliseconds for fakeLoader disappear</p>
<p>zIndex:999, // Default zIndex</p>
<p>spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' </p>
<p>bgColor:"#2ecc71", //Hex, RGB or RGBA colors</p>
<p>imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image</p>
<p>}); </p>
<p></script></p>
<pre>
<h4>可用参数</h4>
<p>  ● timeToHidenumbers：fakeLoader消失的时间，单位毫秒。</p>
<p>  ● zIndex：默认的zIndex。</p>
<p>  ● spinner：可选的spinner：'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'。</p>
<p>  ● bgColor：全屏遮罩的背景颜色。可以是hex、RGB 或 RGBA 颜色值。</p>
<p>  ● imagePath：如果你想自定义图片，使用该选项。</p>
  
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