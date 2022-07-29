import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import styles from '../styles/Nprogress.css'
import Link from 'next/link'

function Home() {
  return (
    <><h1>Next.Js Progress Bar Indicator</h1><ul>
      <div className='flex'>
        <Link href="/">
          <a>Home</a>
        </Link>
     
     
        <Link href="/about">
          <a>About Us</a>
        </Link>
     
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>

        <Link href="/contact">
        <a>Contact Us</a>
      </Link>

      </div>
      <h3>Home</h3>
    </ul></>
  )
}

export default Home