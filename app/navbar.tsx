import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='flex justify-between max-w-5xl mx-auto py-10'>
        <div className=''>Basic NEXTJS</div>
        <div className='flex flex-row space-x-8'>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/cari">Cari</Link>
        </div>
    </header>
  )
}
