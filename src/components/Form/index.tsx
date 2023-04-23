import { FormContainer } from "./styles";
import plusNormal from "../../assets/plus.svg"
import { ChangeEventHandler, MouseEventHandler } from "react";

interface FormProps {
  inputValue: string
  handleInputValue: ChangeEventHandler<HTMLInputElement>
  handleSubmitForm: MouseEventHandler<HTMLButtonElement>
}

export function Form({ inputValue, handleInputValue, handleSubmitForm }: FormProps) {
  
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
        >
          Criar
          <img
            src={plusNormal}/>
        </button>
      </form>
    </FormContainer>
  )
}