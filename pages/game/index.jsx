import React, { useEffect, useState } from 'react';
import style from './../../styles/game.module.css'
import { motion } from 'framer-motion';
import { Sigmar } from 'next/font/google';
import Head from "next/head";
import {useRouter} from "next/router";

const font = Sigmar({
    weight:"400",
    subsets:["latin"]
})




const index = () => {

    const router = useRouter()

    const winConditions = [['a','b','c'],["a","e","i"],["a","d","g"],["b","e","h"],["c","f","i"],["c","e","g"],["d","e","f"],["g","h","i"]]

    const [turn, setTurn] = useState("player 1");

    const [playerOneMoves, setPlayerOneMoves] = useState([])
    const [playerTwoMoves, setPlayerTwoMoves] = useState([])

    const [winner, setWinner] = useState()
    function winnerChecker() {
        if (playerOneMoves.length > 2 || playerTwoMoves.length > 2){
            if (scoreReader(playerOneMoves)){
                showWinner("Player 1")
            }
            if (scoreReader(playerTwoMoves)){
                showWinner("Player 2")
            }
        }
    }

    function showWinner(name) {
        let p = document.querySelector("p")
        let restartButton = document.querySelector("button")
        let table = document.querySelector("table")
        table.classList.add("hidden")
        p.textContent = `${name} is the WINNER`
        p.classList.remove("hidden")
        restartButton.classList.remove("hidden")

    }
    function scoreReader(scores) {
        let validation
        if (scores.length >= 3){
            winConditions.forEach(condition => {
                isValid = condition.filter(elem => scores.includes(elem));
                if (isValid.length ===3){
                    validation = true
                }
            })

        }
        return validation
    }


    useEffect(() => {
        winnerChecker()
        const handleClick = (event) => {
            const element = event.target;
            const elementUnit = element.getAttribute("unit");

            if (element.textContent.length === 0){
                let sign;
                if (turn === "player 1"){
                    sign = "❌";
                    setPlayerOneMoves(prev => [...prev,elementUnit]);
                    setTurn("player 2");

                }else{
                    sign= "⭕";
                    setPlayerTwoMoves(prev => [...prev,elementUnit]);
                    setTurn("player 1");
                }

                element.textContent = sign;
            }
        }

        const tdElements = document.querySelectorAll("td");
        tdElements.forEach(element => {
            element.addEventListener("click", handleClick);
        });

        console.log(turn);
        console.log(playerOneMoves,playerTwoMoves);

        // Cleanup function
        return () => {
            tdElements.forEach(element => {
                element.removeEventListener("click", handleClick);
            });
        };
    }, [turn]);


    return (
        <>
            <Head>
                <title>game center</title>
            </Head>
            <p className={`w-[400px] h-[150px] text-center py-12 rounded-3xl mx-auto top-[10vh] relative transition-all duration-500 ${font.className} absolute hidden text-white text-5xl shadow-2xl bg-green-900`}>{winner}is the winner </p>
            <button onClick={() => location.reload()} className={`w-[400px] mt-5 h-[150px] text-center py-12 rounded-3xl top-[10vh] transition-all absolute duration-500 ${font.className} hidden text-white text-5xl shadow-2xl bg-black`}>reset the game</button>
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
                            <td unit= {"a"} ></td>
                            <td unit={"b"}></td>
                            <td unit={"c"}></td>
                        </tr>
                        <tr>
                            <td unit={"d"}></td>
                            <td unit={"e"}></td>
                            <td unit={"f"}></td>
                        </tr>
                        <tr>
                            <td unit={"g"}></td>
                            <td unit={"h"}></td>
                            <td unit={"i"}></td>
                        </tr> 
                    </tbody>
                </table>
                <button onClick={() => router.push("/")} className={`w-[100px] mt-5 h-[100px] right-10 text-center rounded-3xl mx-auto top-[10vh] absolute transition-all duration-500 ${font.className} text-white text-2xl shadow-2xl bg-black`}>Home</button>
                <button className={`cursor-auto p-2 mt-5 h-[100px] left-10 text-center rounded-3xl mx-auto top-[10vh] absolute transition-all duration-500 ${font.className} text-white text-2xl shadow-2xl bg-black`}>{turn}</button>

            </motion.div>
        </>
    );
};

export default index;