import React from "react"
import { languages } from "./Language"
console.log(languages)

export default function AssemblyEndgame() {
   
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
           </header>
        </main>
    )
}