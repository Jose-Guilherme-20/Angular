var error = function (msg) {
    throw new Error(msg);
};
var loop = function (msg) {
    while (true) {
        console.log("loop");
    }
};
var validate = function (value) {
    if (typeof value === "string") {
        return "value é uma string";
    }
    else if (typeof value === "number") {
        return "value é um number";
    }
    return error("tipo não é valido");
};
console.log(validate(true));
