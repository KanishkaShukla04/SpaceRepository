import gsap from 'gsap'
import { PerspectiveCamera } from 'three'
export function flyToStar(
  camera: PerspectiveCamera,
  targetPosition: [number, number, number],
  onComplete?: () => void
): void {
  gsap.to(camera.position, {
    x: targetPosition[0] + 3,
    y: targetPosition[1] + 1,
    z: targetPosition[2] + 6,
    duration: 1.8,
    ease: 'power3.inOut',
    onComplete
  })
}

export function flyHome(camera: PerspectiveCamera): void {
  gsap.to(camera.position, {
    x: 0, y: 0, z: 20,
    duration: 1.5,
    ease: 'power2.inOut'
  })
}