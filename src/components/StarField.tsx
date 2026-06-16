'use client'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function StarField({ count = 25000 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // positions
      pos[i * 3]     = (Math.random() - 0.5) * 400
      pos[i * 3 + 1] = (Math.random() - 0.5) * 400
      pos[i * 3 + 2] = (Math.random() - 0.5) * 400

      // slight color variation — white, blue-white, warm white
      const type = Math.random()
      if (type < 0.6) {
        col[i * 3] = 1; col[i * 3 + 1] = 1; col[i * 3 + 2] = 1         // white
      } else if (type < 0.8) {
        col[i * 3] = 0.7; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 1     // blue-white
      } else {
        col[i * 3] = 1; col[i * 3 + 1] = 0.95; col[i * 3 + 2] = 0.7    // warm
      }
    }
    return [pos, col]
  }, [count])

  // very slow rotation to feel alive
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.005
      meshRef.current.rotation.x += delta * 0.002
    }
  })

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={0.06}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  )
}