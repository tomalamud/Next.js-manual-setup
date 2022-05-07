import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/"><a>Home</a></Link>
          <Link prefetch={false} href="/about"><a>about</a></Link>
        </menu>
      </nav>
    </div>
  )
}

export default NavBar