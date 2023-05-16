import Image from 'next/image'
import { Inter } from 'next/font/google'
import tic from './../public/images/tic.png'
import Link from 'next/link'
import style from './../styles/home.module.css'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`w-full h-[74vh] flex justify-center items-center ${style.main}`}>
          <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              exit={{ y: 0, opacity: 1 }}
              transition={{
              duration: 1 ,
              type: "tween",
              stiffness: 260,
              damping: 20,}}
          >
            <Link href={"/game"}>
                <button className='p-12 bg-[white] rounded-3xl shadow-2xl shadow-orange-500 border text-3xl active:shadow-none'>Start the game</button>
            </Link>
          </motion.div>
    </main>
    
  )
}
