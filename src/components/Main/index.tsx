import { DeleteButtonTask, MainContainer, SpanMain, SpanTask, SpanTaskDone, TaskCountGreaterThatZero, TaskCountIqualZero, TaskDone, TaskText, WrapperActionsList } from './styles';
import clipBoard from "../../assets/Clipboard.svg"
import { FormEvent } from 'react';

interface MainProps {
    taskCount: number
    actionsList: string[]
    tasksCheckeds: boolean[]
    taskDoneds: number
    onHandleDeleteTask: (index: number, event: FormEvent<HTMLElement>) => any
    onHandleCheckAction: (index: number, event: FormEvent<HTMLElement>) => any
  }

export function Main({ taskCount, actionsList, tasksCheckeds, taskDoneds, onHandleDeleteTask, onHandleCheckAction }: MainProps) {
  const isChecked = tasksCheckeds.map((value) => value);
  
  return(
    <MainContainer>
      <header>
        <SpanMain spanColor="blue">Tarefas criadas <SpanTask>{taskCount}</SpanTask></SpanMain>
        <SpanMain spanColor='purple'>Concluídas <SpanTaskDone>{taskCount === 0 ? 0 : `${taskDoneds} de ${taskCount}` }</SpanTaskDone> </SpanMain>
      </header>

      {taskCount === 0 ? (
        <TaskCountIqualZero>
          <img src={clipBoard} alt="" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </TaskCountIqualZero>
      ) : (
        <WrapperActionsList>
          {actionsList.map((action, index) => {
            return (
              <TaskCountGreaterThatZero key={index}>
                <TaskDone isChecked={isChecked[index] ? 'true' : 'false'} onClick={(e) => onHandleCheckAction(index, e)}></TaskDone>
                <TaskText isChecked={isChecked[index]}>{action}</TaskText>
                <DeleteButtonTask onClick={(event) => onHandleDeleteTask(index, event)}/>
              </TaskCountGreaterThatZero>
            )
          })}
        </WrapperActionsList>
      )}
    </MainContainer>
  )
}