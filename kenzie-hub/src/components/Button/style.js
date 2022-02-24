import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: var(--grey-0);
  width: 100%;
  height: 40px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.backgroundColor};
  font-size: 16px;
`
