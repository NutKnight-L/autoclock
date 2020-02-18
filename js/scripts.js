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
        //图片时钟
	function imgtick()
	{
		var aImg=document.getElementsByTagName('img');
		var oDate=new Date();
		var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
		for(var i=0; i<aImg.length; i++)
		{
			aImg[i].src='img/'+str[i]+'.png';
		}
	}
	imgtick();
	setInterval(imgtick, 1000);
        //数字时钟
        function numtick()
        {
                var oDate=new Date();
                var aSpan=document.getElementsByTagName('span');
                aSpan[0].innerHTML=toDou(oDate.getHours());
                aSpan[2].innerHTML=toDou(oDate.getMinutes());
                aSpan[4].innerHTML=toDou(oDate.getSeconds());
        }
        numtick();
        setInterval(numtick, 1000);
		
};
