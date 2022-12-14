import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme} >
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
