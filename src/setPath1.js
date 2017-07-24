// var state = {};

// function getCopy(val) {
// 	var copy =	{};
// 	debugger;

// 	if(null==val||"object" != typeof val){
// 		return val;
// 	}

// 	if(val instanceof Object) {
		
// 		for(var attr in val) {
// 			if(val.hasOwnProperty(attr)) {
// 				copy[attr] = val[attr];
// 			}
//             return copy;
// 		}
// 		return copy;
// 	}
// 	else {
// 		throw new Error('Something went wrong');
// 	}
// }

// function setPath(obj,path, value) {
// 	var array = path.split('/');	
//     var newObject = getCopy(obj);	

//     if(array.length==1) {
//         newObj[array[0]]=value;
//         return newObject;
//     } else {
//         let newPath = array.slice(1);
//         return setPath(newObject[array[0]], newPath.join('/'), value);
//     }
// }

// state.a={};
// state.b={};
// state.a.c={};
// state.a.d='sdf';
// setPath(state,'state/a/c/e', 'adf');

function getCopy(obj, attr) {
	var copy = {};
	// copy[attr] = {};
	for(var key in obj[attr]) {
		if(obj[attr].hasOwnProperty(key)){
			copy[key] = obj[attr][key];
		}
	}
	return copy;
}

function setPath(obj, path, value) {
	var pathArray = path.split('/');
	var newObject = {};
	debugger;

	if(pathArray.length===1) {
		obj[pathArray[0]] = value;
		return obj;
	} else {
		for(var attr in obj) {
			if(obj.hasOwnProperty(attr)) {
				if(attr===pathArray[0]) {
					newObject[attr] = getCopy(obj, attr);
					obj[attr] = newObject[attr];
				}
				else {
					newObject[attr] = obj[attr];
				}
			}
		}
		var newArray = pathArray.slice(1);
		var newPath = newArray.join('/');
		setPath(newObject[pathArray[0]], newPath, value);
	}
	return obj;
}
var state = {};
state.a={};
state.b={};
state.a.c={};
state.a.d='sdf';
var ars= {state: state};
var s=setPath({state},'state/a/c/e', 'adf');
