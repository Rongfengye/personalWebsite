import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [logo] = useTexture([props.imgUrl])
  console.log("hi, In the ball function, this is image\n", props.imgUrl, "\n this is logo", logo)

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

      <ambientLight intensity={1.25} />

      <directionalLight position={[0,0,0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>

        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal rotation={[2 * Math.PI, 0, 6.25]} flatShading position={[0,0,1]} map={logo} />
        
      </mesh>

    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  // console.log("in the ball canvas function")
  return (
    <Canvas 
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default BallCanvas