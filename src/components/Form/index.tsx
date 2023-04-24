import { FormContainer, ParagraphySameAction } from "./styles";
import plusNormal from "../../assets/plus.svg"
import { ChangeEventHandler, MouseEventHandler } from "react";

interface FormProps {
  inputValue: string
  actionsList: string[]
  handleInputValue: ChangeEventHandler<HTMLInputElement>
  handleSubmitForm: MouseEventHandler<HTMLButtonElement>
}

export function Form({ inputValue, actionsList, handleInputValue, handleSubmitForm }: FormProps) {
  const inputValueLowerCase = inputValue.toLowerCase()
  const actionsListLowerCase = actionsList.map(value => value.toLowerCase())

  const isDisabledSubmitButton = actionsListLowerCase.includes(inputValueLowerCase) || !inputValue

  return(
    <FormContainer>
      <form action="">
        <input
          onChange={handleInputValue} 
          type="text"
          name="" id="" 
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
        />
        <button
          type="submit"
          onClick={handleSubmitForm}
          disabled={isDisabledSubmitButton}
        >
          Criar
          <img
            src={plusNormal}/>
        </button>
        
      </form>
      {actionsListLowerCase.includes(inputValueLowerCase) ? (
         <ParagraphySameAction>Ja existe uma ação com o nome: {inputValue}</ParagraphySameAction>
        ) : (<span></span>) }
    </FormContainer>
  )
}