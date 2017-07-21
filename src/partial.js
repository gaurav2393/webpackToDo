function customPartial(func) {    
    var arg = [];
    arg = Array.prototype.slice.call(arguments, 1);
    return function() {        
        return fn.apply(this, Array.prototype.slice.call(arguments, 0).concat(arg));
    }
}
function fn(a,b,c,d) {
    console.log(a+b+c+d);
}
var returnFun=customPartial(fn,1);
returnFun(2,3,5);