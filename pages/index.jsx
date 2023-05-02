import Image from 'next/image'
import { Inter } from 'next/font/google'
import tic from './../public/images/tic.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-[74vh]'>
      <span>
        {/* <Image
            src={tic}/> */}
      </span>
      <button></button>
    </main>
    
  )
}
