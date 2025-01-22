import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
  const isSmall = useMediaQuery({ query: '(max-width: 480px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' })
  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
          Hi, I am Ayush <span className='waving-hand'>&#128075;</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Building product & Brands</p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.0, -Math.PI, 0.0]}
              />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
            
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space' >
        <a href='#about' className='w-fit'>
          <Button name="let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
        </a>
      </div>
    </section>
  )
}

export default Hero