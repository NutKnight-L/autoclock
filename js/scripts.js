function toDou(n)
{
	if(n<10)
	{
		return '0'+n;
	}
	else
	{
		return ''+n;
	}
}
window.onload=function ()
{
	function tick()
	{
		var aImg=document.getElementsByTagName('img');
		var oDate=new Date();
		var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
		for(var i=0; i<aImg.length; i++)
		{
			aImg[i].src='img/'+str[i]+'.png';
		}
	}
	tick();
	setInterval(tick, 1000);
		
};
