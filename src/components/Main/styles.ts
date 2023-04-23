import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 46rem;
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
  }
  
  section {
    
  }
`

const SPAN_COLORS = {
  blue: 'blue', 
  purple: 'purple',
} as const

interface SpanProps {
  spanColor: keyof typeof SPAN_COLORS
}

export const SpanMain = styled.span<SpanProps>`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 700;
  color: ${props => props.theme[SPAN_COLORS[props.spanColor]]};

`