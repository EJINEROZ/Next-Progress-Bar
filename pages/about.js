import Link from 'next/link'


function about() {
  return (
    <div><><h1>Next.Js Progress Bar Indicator</h1><ul>
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
    
  <h3>About Us</h3>
  </ul></></div>

  )
}

export default about