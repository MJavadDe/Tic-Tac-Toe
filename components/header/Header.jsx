import React from 'react';
import { Sigmar } from 'next/font/google';
    

const font = Sigmar({
        weight: '400' ,
        subsets: ["latin"]  
    })

const Header = () => {

    return (
        <nav className={`w-full flex p-7 border-b-2 bg-white hover:bg-black hover:text-white transition-all  duration-500 ${font.className} justify-center items-center`}>
           <h1 className={`text-4xl`}>Tic Tac Toe</h1>
        </nav>
    );
};

export default Header;