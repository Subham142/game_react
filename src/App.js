import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./Language"


export default function AssemblyEndgame() {
  
    const [currentWord, setCurrentWord] = useState("Assembly")
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const[guessletters, setGuessLetters] = useState([])
      // console.log(guessletters)
      function addGuessLetter(letter) {
        setGuessLetters(prevletters =>
          prevletters.includes(letter) ? prevletters : [...prevletters, letter]
        )
      }


      const letterElements = currentWord.split("").map((letter, index) => {
       return( <span key={index}>{letter.toUpperCase()}</span> )
          
      })

      const keyboardElements = alphabet.split("").map((letter, index) => {
             return ( <button key={index}
                        onClick={()=>{addGuessLetter(letter)}}>{letter}</button>)
       
      })
  const languagechips = languages.map((language) => {
      const style = {
        backgroundColor: language.backgroundColor,
        color : language.color
      }
      return(
        <span
        className="chip"
        style={style}
        key={language.name}>
          {language.name}
        </span>
      )
    })



    return (
        <main>
           <header>
           <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
                <section className="game-status">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </section>
                <section className="language-chips">
                      {languagechips}
                </section>
                <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
           </header>
        </main>
    )
}