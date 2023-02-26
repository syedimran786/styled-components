import React from 'react'
import { Tbutton } from './buttons/theambtn'
import { ThemeProvider } from 'styled-components'

function ThemeButton() {

    let theme={
        dark:{
            textclr:"white",
            border:"2px solid black",
            bgclr:"black"
        },
        light:{
            textclr:"black",
            border:"2px solid black",
            bgclr:"white"
        }
    }
  return (
    <ThemeProvider theme={theme}>
        <Tbutton>Dark</Tbutton>
    </ThemeProvider>
  )
}

export default ThemeButton