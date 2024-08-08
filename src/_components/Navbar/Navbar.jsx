import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <Link href='/singin' >
      <button>login</button>
      </Link>
    </div>
  )
}

export default Navbar
