import Link from 'next/link'

function contact() {
  return (
    <div> <div><><h1>Next.Js Progress Bar Indicator</h1><ul>
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
    
  <h3>Contact Us</h3>
  </ul></></div></div>
  )
}

export default contact