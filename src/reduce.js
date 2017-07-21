Array.prototype.customReduce = function(func, initialValue) {
	var index,
		length = this.length,
		value = initialValue;
	if(typeof initialValue !== "undefined") {
		index = 0;
	}
	else {
		index = 1;
		value = this[0];
	}
	for(index;index<length;index++) {
		value = func(value, this[index], index, this);
	}
	return value;
}

var a=[4,6,7];
var reducedValue=a.customReduce(function(value, init){
	return value*init;
}, 2);
console.log(reducedValue);