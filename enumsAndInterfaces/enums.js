var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var getColor = function (getColor) {
    return "".concat(getColor.Red, " , ").concat(getColor.Green, ", ").concat(getColor.Blue);
};
console.log(getColor(Color));
