import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/form'
import About from '../components/About'
import Hero from '../components/Hero'
import Nav from '../components/nav'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import Features from '../components/Features'


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      {/* ----- Hero End ---- */}
      <Form />
      <Features />
      <About />
    </React.Fragment>
  );
}

export default Home
