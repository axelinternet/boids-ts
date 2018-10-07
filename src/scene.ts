import { Flock } from './Flock'
import { Boid, BoidOptions } from './Boid'
import { RandomSeed, create as createRandom } from 'random-seed'
import { create as createVector, set } from 'gl-vec2'

const randomGenerator: RandomSeed = createRandom('dudee')
const random = randomGenerator.floatBetween

const CANVAS_WITH_1 = false

function getBoidOpts(canvasWidth: number, canvasHeight: number): BoidOptions {
  const normalizationContant = CANVAS_WITH_1 ? 600 : 1
  return {
    center: [canvasWidth / 2, canvasHeight / 2],
    canvasSize: [canvasWidth, canvasHeight],

    velocity: set(
      createVector(),
      random(-1, 1) / normalizationContant,
      random(-1, 1) / normalizationContant,
    ),
    r: 3 / normalizationContant,
    maxspeed: 3 / normalizationContant,
    maxforce: 0.05 / normalizationContant,

    separationScale: 1.5,
    alignScale: 1.0,
    cohesionScale: 1.0,

    desiredSeparation: 25 / normalizationContant,
    neighborDistance: 50 / normalizationContant,
  }
}

export function init(context: CanvasRenderingContext2D, width: number, height: number) {
  const flock = new Flock()

  for (let i = 0; i < 60; i++) {
    let b = new Boid(getBoidOpts(CANVAS_WITH_1 ? 1 : width, CANVAS_WITH_1 ? 1 : height))
    flock.addBoid(b)
  }

  const gradient = context.createLinearGradient(0, 0, width, 0)
  gradient.addColorStop(0, '#00b4db')
  gradient.addColorStop(1, '#0083b0')

  let frameCount = 0

  function loop() {
    frameCount++
    flock.run()

    context.clearRect(0, 0, width, height)
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'black'

    for (let i = 0; i < flock.boids.length; ++i) {
      const boid = flock.boids[i]

      const x = boid.position[0] * (CANVAS_WITH_1 ? width : 1)
      const y = boid.position[1] * (CANVAS_WITH_1 ? height : 1)

      context.beginPath()
      context.moveTo(x, y)
      context.arc(x, y, 2, 0, Math.PI * 2)
      context.closePath()
      context.fill()
    }
    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}
