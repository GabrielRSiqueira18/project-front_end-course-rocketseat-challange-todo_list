import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Main } from './components/Main/index';
import { GapFormMain } from "./GapFormMain"

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <GapFormMain>
        <Form/>
        <Main/>
      </GapFormMain>
      

      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
