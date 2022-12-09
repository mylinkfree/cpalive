import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Iframe from 'react-iframe'
export default function Home() {
  return (
    <div >
      <Iframe url="https://lustrousdrf.netlify.app"
       
       
        id=""
        className="iframe"
        display="block"
        position="relative"/>
    </div>
  )
}
