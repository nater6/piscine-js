is.num = (n) => typeof n === 'number';
is.nan = (n) => isNaN(n);
is.str = (s) => typeof s === 'string';
is.bool = (b) => typeof b === 'boolean'
is.undef = (u) => typeof u === 'undefined';
is.def = (d) => !(typeof u === 'undefined');
is.arr = (a) => typeof a === 'array';
is.obj = (o) => (typeof o === 'object');
is.fun = (f) => (typeof f === 'function');
is.truthy = (t) => t == true;
is.falsy = (f) => f == false;