import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductCard from "./productComponent"

export default function Home() {
  return (
    <div>
      <h1>Welcome to next</h1>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}
