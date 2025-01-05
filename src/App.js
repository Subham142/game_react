import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./Language"


export default function AssemblyEndgame() {
  
    const [currentWord, setCurrentWord] = useState("asembly")
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const[guessletters, setGuessLetters] = useState([])
      // console.log(guessletters)
    
    const wrongGuestCount = 
    guessletters.filter(letter => !currentWord.includes(letter)).length

    const isGameWon = currentWord.split("").every(letter => guessletters.includes(letter))
    const isGameLost = wrongGuestCount >= 8
    const isGameOver = isGameWon || isGameLost

      function addGuessLetter(letter) {
        setGuessLetters(prevletters =>
          prevletters.includes(letter) ? 
          prevletters : 
          [...prevletters, letter]
        )
      }


      const letterElements = currentWord.split("").map((letter, index) => {
       return( <span
         key={index}>
          { guessletters.includes(letter) ? letter.toUpperCase(): "" }
          </span> )
          
      })

      const keyboardElements = alphabet.split("").map((letter) => {
        const isGuessed = guessletters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
          correct : isCorrect,
            wrong : isWrong,
        })
             return ( <button key={letter}
                      className={className}
                        onClick={()=>{addGuessLetter(letter)}}>
                          {letter.toUpperCase()}</button>)
       
      })
  const languagechips = languages.map((language,index) => {
      const style = {
        backgroundColor: language.backgroundColor,
        color : language.color
      }

      const isLanguageLost = index < wrongGuestCount 
      const className = clsx("chip", isLanguageLost && "lost")

      return(
        <span
        className={className}
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
                {isGameWon && <section className="game-status">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </section>
                }
                <section className="language-chips">
                      {languagechips}
                </section>
                <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
           </header>
        </main>
    )
}