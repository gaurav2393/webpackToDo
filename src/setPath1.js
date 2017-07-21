var state = {};

function getCopy(val) {	
	debugger;

	if(null==val||"object" != typeof val){
		return val;
	}

	if(val instanceof Object) {
		
		for(var attr in val) {
			if(val.hasOwnProperty(attr)) {
				copy[attr] = val[attr];
			}
            return copy;
		}
		return copy;
	}
	else {
		throw new Error('Something went wrong');
	}
}

function setPath(obj,path, value) {
	var array = path.split('/');	
    var newObject = getCopy(obj);	

    if(array.length==1) {
        newObj[array[0]]=value;
        return newObject;
    } else {
        let newPath = array.slice(1);
        return setPath(newObject[array[0]], newPath.join('/'), value);
    }
}

state.a={};
state.b={};
state.a.c={};
state.a.d='sdf';
setPath(state,'state/a/c/e', 'adf');