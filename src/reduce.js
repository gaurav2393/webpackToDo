Array.prototype.customReduce = function(func, initialValue) {
	var index,
		length = this.length,
		value = initialValue;
	if(typeof link !== "undefined") {
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