import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  color: #000000;
  font-size: 10rem;
  font-weight: 900;
`

export default function About() {
  return (
    <>
      <Head>
        <title>About Ruben</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
      </Hero>
    </>
  )
}
