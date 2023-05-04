import styled from "styled-components";
import deleteButton from "../../assets/trash.svg"
import deleteButtonHover from "../../assets/trash_hover.svg"
import check from "../../assets/check.svg"

export const MainContainer = styled.div`
  max-width: 46rem;
  width: 80%;
  height: calc(100vh - 21.5rem);
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
  }
`

export const TaskCountIqualZero = styled.div`
  width: 100%;
  height: 17.9375rem;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  p {
    &:first-child {
      font-weight: 700;
    }

    color: ${props => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 1.4;
  }
  
`
export const WrapperActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

export const TaskCountGreaterThatZero = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: .75rem;

  height: 4.5rem;
  background-color: ${props => props.theme["gray-500"]};

  border-radius: 8px;
  border: 1px solid ${props => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
`

export const DeleteButtonTask = styled.div`
  background-image: url(${deleteButton});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1.75rem;
  height: 1.75rem;
  align-self: flex-start;
  position: relative;
  bottom: 4px;
  cursor: pointer;

  &:hover {
    background-image: url(${deleteButtonHover});
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const IS_CHECKED = {
  true: true,
  false: false,
}

interface TaskDoneProps {
  isChecked: keyof typeof IS_CHECKED
}

export const TaskDone = styled.div<TaskDoneProps>`
  width: 1.090625rem;
  height: 1.090625rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${props => props.isChecked === 'true' ? props.theme["purple-dark"] : props.theme["blue"]};
  background-color: ${props => props.isChecked === 'true' ? props.theme["purple-dark"] : ''};
  background-image: ${props => props.isChecked === 'true' ? `url(${check})` : 'none'};
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  
  border-color: ${props => props.isChecked === 'true' ? props.theme.purple : ''};

  &:hover {
    background-color: ${props => props.isChecked === 'true' ? props.theme.purple : props.theme["gray-400"]};
    border: 1px solid ${props => props.isChecked === 'true' ? props.theme["purple"] : props.theme["blue-dark"]};
  }
`

export const TaskText = styled.div<{isChecked: boolean}>`
  flex: 1;
  text-align: justify;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.isChecked ? props.theme["gray-300"] : props.theme["gray-100"]};
  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};
`

const SPAN_COLORS = {
  blue: 'blue', 
  purple: 'purple',
} as const

interface SpanProps {
  spanColor: keyof typeof SPAN_COLORS
}

export const SpanMain = styled.span<SpanProps>`
  display: flex;
  gap: .5rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 700;
  color: ${props => props.theme[SPAN_COLORS[props.spanColor]]};

`

export const SpanTask = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5625rem;
  height: 1.1875rem;
  padding: .125rem .5rem;
  border-radius: 50%;

  background-color: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-100"]};
`

export const SpanTaskDone = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .125rem .5rem;
  border-radius: 50%;

  background-color: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-100"]};
`