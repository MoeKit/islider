# Demo

---

## Normal usage

````iframe:350
<style>
 	* {margin:0;padding:0;}
</style>
<link rel="stylesheet" href="../islider.css">
<div id="islider-box">
	<ul>
		<li style="z-index: 3; opacity: 1;background-color:red;">
		<a href="#" target="_blank" title="5月22日测试开启领报名资格">
        	<img src="http://image.bozhong.com/cms/2015/01/06/23fbe2899de25e07a7303b76811acdff142460.jpg" alt="" />
        	</a>
        </li>
		<li>
		<a href="#" target="_blank" title="首测世界的雕琢篇章开启" style="background-color:blue;">
        	<img data-src="http://image.bozhong.com/cms/2015/01/06/ad9297827086687bf116ffd8dde64d39111199.jpg" alt="" />
        	</a>
        </li>
		<li style="background-color:green;">  
		<a href="#" target="_blank" title="上古世纪游戏资料手册">
        	<img data-src="http://image.bozhong.com/cms/2015/01/06/284a6891d395c67ba7a1c8cd9b39e4dc248376.jpg" alt="" />
        	</a>
        </li>
		<li style="background-color:yellow;"> 
		<a href="#" target="_blank" title="游戏四大特色揭晓">
        	<img data-src="http://image.bozhong.com/cms/2015/01/06/824ab9d7447a850eab05a897db524563573599.jpg" alt="" />
        	</a>
        </li>
	</ul>          
</div>

<script type="text/javascript">
	seajs.use('index', function(islider) {
		new islider({
			target:'#islider-box'
		});
	});
</script>
````

