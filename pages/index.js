import React from 'react';
import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Register from '../components/register'
import Footer from '../components/footer'
import Works from '../components/works'
import Social from '../components/social'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mockkart</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/logo-color.png" />
      </Head>
      <Main />
      <About />
      <Works />
      <Skills />
      <Register />
      <Social />
      <Footer />
    </div>
  )
}
