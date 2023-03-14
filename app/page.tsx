import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1>Home</h1>
    </div>
  )
}
