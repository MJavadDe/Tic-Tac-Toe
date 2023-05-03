import Image from 'next/image'
import { Inter } from 'next/font/google'
import tic from './../public/images/tic.png'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-[74vh] border-2 border-red-800 flex justify-center items-center'>
          <Link href={"/game"}>
              <button className='p-12 bg-[white] rounded-3xl shadow-2xl shadow-orange-500 border text-3xl active:shadow-none'>Start the game</button>
          </Link>
    </main>
    
  )
}
