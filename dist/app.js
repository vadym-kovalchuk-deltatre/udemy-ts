"use strict";
console.info("new file");
var a = 10;
var b = 12;
function add(a, b, cb) {
    var res = a + b;
    return cb(res);
}
var sum = add(a, b, function (res) {
    return res + 1 / 10;
});
//# sourceMappingURL=app.js.map