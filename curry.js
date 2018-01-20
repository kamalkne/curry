function volume( l, w, h ) {
  console.log(l * w * h);
}


var curry = function(fn) {
    var args = [];
    var result = 0;
    var rFn;
    var that = fn;
    rFn = function() {
        args = args.concat(Array.prototype.slice.call(arguments));
        if (args.length === that.length) {
            that.apply(window, args);
        } else {
            return rFn;
        }
    }
    return rFn;
}


var curried = curry( volume );
curried( 1 )( 2 )( 3 ); // 6
// curried( 1 , 2 , 3 ); // 6
// curried( 1 , 2 )( 3 ); // 6
// curried( 1 )( 2 , 3 ); // 6

