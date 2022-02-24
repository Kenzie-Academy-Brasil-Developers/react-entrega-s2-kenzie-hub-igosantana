import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 340px;
    padding: 16px;
    border-radius: 4px;
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  border-radius: 4px;
  padding: 5px;
  justify-content: center;
  text-align: center;

  > div {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    > h3 {
      font-size: 15px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 20px;
      color: var(--grey-0);
    }

    > span {
      font-size: 10px;
      color: var(--grey-1);
      margin-bottom: 20px;
    }
  }

  form {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    > button {
      :hover {
        background-color: var(--color-primary-focus);
      }
    }
    a > button {
      :hover {
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
      }
    }
  }
`

export const SpanContainer = styled.div`
  margin: 16px 0;
  span {
    color: var(--grey-1);
    font-size: 10px;
  }
`
