import React, { useEffect, useState } from 'react';
import style from './../../styles/game.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { Sigmar } from 'next/font/google';

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
                    let crossData = crosses.sort().toString()
                    console.log(crossData);
                    if (crosses.length >= 3) {
                        const winCheck = winCondition.map(condition => {
                            
                            if (crossData.includes(condition.toString())) {
                                return crossData.includes(condition.sort().toString())
                            }
                        })
                       console.log(winCheck);
                    }
                }
            })
        })
    
      
    }, [])
    
    return (
        <>
            <p className={`w-[400px] h-[150px] text-center py-12 rounded-3xl mx-auto top-[10vh] relative transition-all duration-500 ${font.className} hidden text-white text-5xl shadow-2xl bg-green-900`}></p>
            <button className={`w-[400px] mt-5 h-[150px] text-center py-12 rounded-3xl mx-auto top-[10vh] relative transition-all duration-500 ${font.className} hidden text-white text-5xl shadow-2xl bg-black`}>reset the game</button>
            <table className={`w-[450px] h-[450px] mx-auto top-[10vh] relative text-center transition-all duration-500 shadow-2xl rounded-3xl ${style.table}`}>
                <tbody>
                    <tr>
                        <td unit="a"></td>
                        <td unit="b"></td>
                        <td unit="c"></td>
                    </tr>
                    <tr>
                        <td unit="d"></td>
                        <td unit="e"></td>
                        <td unit="f"></td>
                    </tr>
                    <tr>
                        <td unit="g"></td>
                        <td unit="h"></td>
                        <td unit="i"></td>
                    </tr> 
                </tbody>
            </table>
        </>
    );
};

export default index;