var PI = Math.PI;

exports.circlearea = function (r) {
  return PI * r * r;
};

exports.circlecircumference = function (r) {
  return 2 * PI * r;
};

exports.squarearea = function (s) {
  return s * s;
};

exports.squareperimeter = function (s) {
  return s + s + s + s;
};

exports.trianglearea = function (b,h) {
  return (b * h)/2;
};