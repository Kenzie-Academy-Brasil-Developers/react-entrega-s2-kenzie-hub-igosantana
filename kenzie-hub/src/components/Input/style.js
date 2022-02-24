import styled from 'styled-components'

export const Container = styled.div`
  text-align: left;

  label {
    color: var(--grey-0);
    font-size: 12px;
    margin-bottom: 16px;
    display: inline-block;
  }

  > div {
    > span {
      color: var(--negative);
      font-size: 12px;
    }
  }
`

export const InputContainer = styled.div`
  background-color: var(--grey-2);
  border: 1px solid var(--grey-2);
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 15px;

  :focus-within {
    border: 1px solid var(--grey-0);
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    padding: 5px;
    color: var(--grey-0);

    ::placeholder {
      color: var(--grey-1);
    }
  }
`
