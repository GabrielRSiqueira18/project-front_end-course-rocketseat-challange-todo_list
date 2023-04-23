import { MainContainer, SpanMain } from './styles';

export function Main() {
  return(
    <MainContainer>
      <header>
        <SpanMain spanColor="blue">Tarefas criadas</SpanMain>
        <SpanMain spanColor='purple'>Concluídas</SpanMain>
      </header>
    </MainContainer>
  )
}