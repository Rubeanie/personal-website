import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Model from '../components/Crown'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`
const Heading = styled.h1`
  color: #000000;
  font-size: 10vw;
  font-weight: 900;
  text-align: center;
`
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Foreground = styled.div`
  position: absolute; 
  z-index: 2;
`

const Midground = styled.div`
  position: absolute; 
  z-index: 1;
`

const Background = styled.div`
  position: absolute; 
  z-index: 0;
`

export default function Tester() {
  return (
    <>
      <Head>
        <title>Ruben P</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Foreground>
          <h1>Model</h1>
        </Foreground>
        <Background>
          <Canvas colorManagement camera={{ position: [0, 0, 10], fov: 80}}>
            <Suspense fallback={null}>
              <Model scale={[1, 1, 1]}/>
            </Suspense>
          </Canvas>
        </Background>
      </Hero>
    </>
  )
}
