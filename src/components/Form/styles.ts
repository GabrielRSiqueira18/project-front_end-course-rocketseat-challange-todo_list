import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 46rem;
  width: 80%;
  height: 3.375rem;

  margin: 0 auto;


  form {
    width: 100%;
    height: 100%;
    display: flex;
    gap: .5rem;
    position: relative;
    bottom: 50%;
    flex-wrap: wrap;
    
    input {
      height: 100%;
      flex: 1;
      background-color: ${props => props.theme["gray-500"]};
      border-radius: 8px;
      border: 1px solid ${props => props.theme["gray-700"]};
      color: ${props => props.theme["gray-100"]};
      padding-left: 1rem;

      &:focus {
        border-color: ${props => props.theme["purple-dark"]};
      }

      &::placeholder {
        color: ${props => props.theme["gray-300"]};
      }
    }
  
    button {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 5.625rem;
      border-radius: 8px;
      gap: .5rem;

      background-color: ${props => props.theme["blue-dark"]};
      color: ${props => props.theme["gray-100"]};

      cursor: pointer;

      &:not(:disabled):hover {
        transition: .2s;

        background-color: ${props => props.theme["blue"]};
      }

      &:disabled {
        filter: brightness(0.6);
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 424px) {
    button {
      flex: 1;
      margin: 0 auto;
      padding: 1rem;
    }
  }
`

export const ParagraphySameAction = styled.p`
  color: ${props => props.theme.danger};
  font-size: 1.25;
  font-weight: 700;
`