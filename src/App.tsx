import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Main } from './components/Main/index';
import { GapFormMain } from "./GapFormMain"
import { useState, ChangeEvent, FormEvent } from "react"

function App() {
  
  const [ inputValue, setInputValue ] = useState('')
  const [ actionsList, setActionsList ] = useState<string[]>([])
  const [ taskCount, setTaskCount ] = useState(0)
  const [ tasksCheckeds, setTesksCheckeds ] = useState<boolean[]>(actionsList.map(() => false))
  const [ taskDoneds, setTasksDoneds ] = useState(0)

  function handleInputValue(event:ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInputValue(value)
  }

  function handleSubmitForm(event:FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    const newTaskChcked = [...tasksCheckeds]
    const actionValue = inputValue

    const newActionList = [...actionsList]
    newActionList.push(actionValue)

    setActionsList(newActionList)

    setInputValue('')
    setTaskCount(newActionList.length)
    newTaskChcked.push(false)

    setTesksCheckeds(newTaskChcked)
  }

  function handleDeleteTask(index: number, event: FormEvent<HTMLElement>) {
    event.preventDefault()

    const tasksCheckedsNew = [...tasksCheckeds]
    tasksCheckedsNew.splice(index, 1)
    setTesksCheckeds(tasksCheckedsNew)

    const actionsListNew = [...actionsList]
    actionsListNew.splice(index, 1)
    setActionsList(actionsListNew)

    setTaskCount(actionsListNew.length)
    if(taskDoneds === 0) {
      setTasksDoneds(0)
    } else {
      setTasksDoneds((state) => state-=1)
      }
    
  }

  function handleCheckAction(index: number, event: FormEvent<HTMLElement>) {
    event.preventDefault()
  
    const arrCheckdsActions = [...tasksCheckeds]
    arrCheckdsActions[index] = !arrCheckdsActions[index]
    
    setTesksCheckeds(arrCheckdsActions)
    
    if(arrCheckdsActions[index] === true) {
      setTasksDoneds((state) => state +=1)
    } else {
      setTasksDoneds((state) => state -=1)
    }
}

return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <GapFormMain>
        <Form
          inputValue={inputValue}
          handleInputValue={handleInputValue}
          handleSubmitForm={handleSubmitForm}
        />
        <Main
          taskCount={taskCount}
          actionsList={actionsList}
          onHandleDeleteTask={handleDeleteTask}
          onHandleCheckAction={handleCheckAction}
          tasksCheckeds={tasksCheckeds}
          taskDoneds={taskDoneds}
        />
      </GapFormMain>
      

      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
