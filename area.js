function calculateRectangleArea(length, width) {
  let rectangleArea = length * width
  if (rectangleArea <= 0) {
    return undefined;
  }
  else return rectangleArea;
}
console.log(calculateRectangleArea(-1, 0)); 

function calculateTriangleArea(base, height) {
  let triangleArea = base * height / 2
  if (triangleArea <= 0) {
    return undefined;
  } 
  else return triangleArea;
}

console.log(calculateTriangleArea(10, -5)); 

function calculateCircleArea(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2)
  if (circleArea < 0) {
    return undefined;
  } else if (radius < 0) {
    return undefined;
  }
  else return circleArea;
}
console.log(calculateCircleArea( -1 ));
