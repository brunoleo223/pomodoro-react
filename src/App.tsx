import { ThemeProvider } from "styled-components"
import { ButtonContainer } from "./Button.styles"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <ButtonContainer variant="primary">Oi</ButtonContainer>
      <ButtonContainer variant="secondary">Oi</ButtonContainer>
      <ButtonContainer variant="danger">Oi</ButtonContainer>
      <ButtonContainer variant="success">Oi</ButtonContainer>
      <ButtonContainer>Oi</ButtonContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
