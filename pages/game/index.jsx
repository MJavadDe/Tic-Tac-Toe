import React, { useEffect, useState } from 'react';
import style from './../../styles/game.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { Sigmar } from 'next/font/google';
import {router} from "next/client";

const font = Sigmar({
    weight:"400",
    subsets:["latin"]
})




const index = () => {

    const winCondition = [['a','b','c'],["a","e","i"],["a","d","g"],["b","e","h"],["c","f","i"],["c","e","g"],["d","e","f"],["g","h","i"]]

    const crosses = []
    const circle = []

    useEffect(() => {
        const tdElements = document.querySelectorAll("td");
        tdElements.forEach((element,i) => {
            element.addEventListener("click",() => {
                if(element.innerHTML === ""){
                    element.innerHTML = "<p>&#10006;</p>" ;
                    let elemUnit = element.getAttribute("unit")
                    crosses.push(elemUnit)
                    console.log(crosses);
                    let crossData = crosses.sort()
                    console.log(crossData);
                    
                    if (crosses.length >= 4) {
                            crossData.splice(2,1)
                        
                        console.log(crossData);
                    
                    }
                
                
                
                }


            })
        })
    
      
    }, [])

    function goBack(){
        router.push('/')
    }
    
    return (
        <>
            <p className={`w-[400px] h-[150px] text-center py-12 rounded-3xl mx-auto top-[10vh] relative transition-all duration-500 ${font.className} hidden text-white text-5xl shadow-2xl bg-green-900`}></p>
            <button className={`w-[400px] mt-5 h-[150px] text-center py-12 rounded-3xl mx-auto top-[10vh] relative transition-all duration-500 ${font.className} hidden text-white text-5xl shadow-2xl bg-black`}>reset the game</button>
            <motion.div
                 initial={{ y: -300, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: 300, opacity: 0 }}
                 transition={{
                 duration: 0.8 ,
                 type: "tween",
                 stiffness: 260,
                 damping: 20,}}
             >
                <table className={` table w-[450px] h-[450px] mx-auto top-[10vh] relative text-center transition-all duration-500 shadow-2xl rounded-3xl ${style.table}`}>
                    <tbody>
                        <tr>
                            <td unit= {1} ></td>
                            <td unit={2}></td>
                            <td unit={3}></td>
                        </tr>
                        <tr>
                            <td unit={4}></td>
                            <td unit={5}></td>
                            <td unit={6}></td>
                        </tr>
                        <tr>
                            <td unit={7}></td>
                            <td unit={8}></td>
                            <td unit={9}></td>
                        </tr> 
                    </tbody>
                </table>
            </motion.div>
            <button className={`w-[100px] mt-5 h-[100px] right-10 text-center rounded-3xl mx-auto top-[10vh] absolute transition-all duration-500 ${font.className} text-white text-2xl shadow-2xl bg-black`}>Home</button>
        </>
    );
};

export default index;