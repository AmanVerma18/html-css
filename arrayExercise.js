

function printReverse(arr){
	var s="";
	
	 for(var i=arr.length - 1;i>-1;i--)
	 {
	s=s+" "+arr[i];

	 }
	console.log(s);
}
function isUniform(arr)
{var flag=0
	var f=arr[0];
	arr.forEach(function(a,i){
		if(f!==a)
		{
			flag=1;
		}
	})
	if(flag===1)
	{
		return false;
	}
    else{
    	return true;
    }
}
function sumArray(arr)
{var sum=0;
	arr.forEach(function(s){
		sum=sum+s;
	});
	return sum;
}
function max(arr)
{
	var m=arr[0];
	arr.forEach(function(i){
		if(i>m)
		{
			m=i;
		}
	});
	console.log("max is "+m);
}
