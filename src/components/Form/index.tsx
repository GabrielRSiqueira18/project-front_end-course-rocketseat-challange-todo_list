import { FormContainer } from "./styles";
import plusNormal from "../../assets/plus (1).svg"


export function Form() {
  return(
    <FormContainer>
      <form action="">
        <input type="text" name="" id="" placeholder="Adicione uma nova tarefa"/>
        <button>Criar <img src={plusNormal} alt="" /></button>
      </form>
    </FormContainer>
  )
}