import React from 'react';
import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Register from '../components/register'
import Footer from '../components/footer'
import Works from '../components/works'



export default function Home() {
  return (
    <div>
      <Head>
        <title>DataSciDrill</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Works />
      <Skills />
      <Register />
      <Footer />
    </div>
  )
}
