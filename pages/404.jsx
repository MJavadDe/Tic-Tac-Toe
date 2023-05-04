import React from 'react';
import { Sigmar } from 'next/font/google';
import Link from 'next/link';

const font = Sigmar({
    weight:"400",
    subsets:['latin']
})
const NotFound = () => {

    return (
        <div className={`w-full h-[74vh] flex justify-center items-center ${font.className} `}>
            <div className='flex flex-col gap-16'>
                <span className='text-center text-4xl'>
                    it seems that you are LOST
                </span>
                <button className='hover:shadow-2xl border border-black transition-all duration-500  p-10 text-2xl rounded-3xl'>
                    <Link href={"/"}>
                        back to the main page
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;