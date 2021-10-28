import Header from './components/header'
import Footer from './components/footer'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductCard from "./productComponent"
import MyApp from './_app'

export default function Home() {
  return (
    <div>
      <Header />

      
      <Footer />
      <h1>Welcome to next</h1>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}
