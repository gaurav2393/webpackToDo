function myCurr(fn) {
	var a=fn.length;
	var b=[];
	return function func() {
		if(b.length==a-1) {
			console.log('adsa');
			fn.apply(this, b);
		}
		else {
			b.push[arguments[0]];
			return func
		}
	}
}

function f(a,b) {
    console.log(a+b);
}
myCurr(f);