# Demo

---

## Normal usage

````iframe:960
<style>
	#islider-box { width: 100%;height:250px;position: relative; z-index: 1; overflow: hidden; margin: 0 auto; border:1px solid red;}
	.ggBox {width:100%;height:250px;margin: 0 auto;list-style:none;padding-left:0; }
    .ggBox li { list-style:none;position: absolute; z-index: 1; opacity: 0.1; left:0;top:0;width:100%;height:250px;text-align:center;}
    .ggBox img {  width: 960px;  }
</style>
<div id="islider-box">
	<ul class="ggBox" id="ggBox">
		<li style="z-index: 3; opacity: 1;"><a href="#" target="_blank" title="5月22日测试开启领报名资格">
        	<img src="http://image.bozhong.com/cms/2015/01/06/23fbe2899de25e07a7303b76811acdff142460.jpg" alt="" /></a>
        </li>
		<li><a href="#" target="_blank" title="首测世界的雕琢篇章开启">
        	<img src="http://image.bozhong.com/cms/2015/01/06/ad9297827086687bf116ffd8dde64d39111199.jpg" alt="" /></a>
        </li>
		<li>  <a href="#" target="_blank" title="上古世纪游戏资料手册">
        	<img src="http://image.bozhong.com/cms/2015/01/06/284a6891d395c67ba7a1c8cd9b39e4dc248376.jpg" alt="" /></a>
        </li>
		<li> <a href="#" target="_blank" title="游戏四大特色揭晓">
        	<img src="http://image.bozhong.com/cms/2015/01/06/824ab9d7447a850eab05a897db524563573599.jpg" alt="" /></a>
        </li>
	</ul>          
</div>

<script type="text/javascript">
	seajs.use('index', function(islider) {
	});
</script>
````

