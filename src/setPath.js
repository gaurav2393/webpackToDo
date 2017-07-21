var state = {};

function getCopy(val) {
	var copy;

	if(null==val||"object" != typeof val){
		return val;
	}

	if(val instanceof Object) {
		copy = {};
		for(var attr in val) {
			if(val.hasOwnProperty(attr)) {
				copy[attr] = getCopy(val[attr]);
			}
		}
		return copy;
	}
	else {
		throw new Error('Something went wrong');
	}
}

function setPath(path, value) {
	var array = path.split('/');
	var copy = getCopy(state);
	var length = array.length;
	var storeTo;
	for(let i=0;i<length-1;i++) {
		storeTo = copy.array[i];
	}
	storeTo.array[length-1] = value;
	return copy;
}