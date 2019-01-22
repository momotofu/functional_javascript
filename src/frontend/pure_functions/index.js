/**
 *
 * Find the area of a cylinder
 *
 * Areas:
 * Circle = piR^2
 * Rect = width * length
 * total area = (topCircleArea * 2) + sideArea
 */

const pi = Math.PI

const multiply = (a, b) => a * b
const sum = (a, b) => a + b
const divide = (a, b) => a / b
const squared = (a) => multiply(a, a)
const doubled = (a) => multiply(a, 2)

const height = 10
const diameter = 20

const radius = (diam) => divide(diam, 2)
const toPerimeter = (diam) => multiply(diam, pi)

const circleArea = (radius) => multiply(pi, squared(radius))
const rectArea = multiply

const surfaceAreaCylinder = (height, diameter) => sum(
  doubled(
    circleArea(
      radius(diameter)
    )
  ),
  rectArea(height, toPerimeter(diameter))
)

console.log('totalArea: ', surfaceAreaCylinder(height, diameter))
