import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      {/* ---- Nav start ------ */}
      <Nav />
      {/* ---- Nav End ----- */}
      
      {/* ---- Hero start ---- */}
      <Hero />
      {/* ----- Hero End ---- */}
    </div>
  );
}

export default Home
