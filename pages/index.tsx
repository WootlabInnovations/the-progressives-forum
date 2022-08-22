import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Nav from '../components/nav'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import Features from '../components/Features'
import Faq from '../components/Faq'
import Form from '../components/form'
import Team from '../components/Team'
import Mission from '../components/Mission'


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <About />
      <Features />
      <Team />
      <Mission />
      <Faq />
      <Form />
    </React.Fragment>
  );
}

export default Home
