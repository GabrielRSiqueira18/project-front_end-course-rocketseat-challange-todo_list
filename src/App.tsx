import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Main } from './components/Main/index';

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Form/>
      <Main/>

      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
