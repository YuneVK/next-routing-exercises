import React from "react"
import Link from "next/link"

import ScreenSaver from "../../../components/ScreenSaver"

const COLORS = [
  "aquamarine",
  "coral",
  "darkorange",
  "darkseagreen",
  "gold",
  "lightpink",
  "orchid",
]

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <h1>Choose your color</h1>

      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ScreenSaverExercise
