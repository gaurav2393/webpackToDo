function myCurr(fn) {
	var a=fn.length;
	var b=[];
	function func() {
		if(b.length==a-1) {			
			fn.apply(this, b);
		}
		else {
			b.push(arguments[0]);
			return func
		}
	}
	return func
}

function f(a,b) {
    console.log(a+b);
}
myCurr(f);