import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: var(--grey-4);

  h3 {
    color: var(--grey-0);
    font-size: 14px;
    font-weight: bold;
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
  }

  :hover {
    background-color: var(--grey-2);
  }
`
