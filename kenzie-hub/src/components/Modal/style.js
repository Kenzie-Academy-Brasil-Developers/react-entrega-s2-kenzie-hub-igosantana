import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 340px;
    height: max-content;
  }
`

export const ModalHeader = styled.div`
  width: 100%;
  background-color: var(--grey-2);
  padding: 10px;
  border-radius: 4px 4px 0 0;

  > div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--grey-0);
      font-size: 12px;
      font-weight: bold;
    }

    button {
      background-color: var(--grey-2);
      border: none;
      color: var(--grey-1);
    }
  }
`

export const ModalFormContainer = styled.div`
  width: 100%;
  padding: 10px 16px;
  background-color: var(--grey-3);
  border-radius: 0 0 4px 4px;

  > form > div {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    label {
      color: var(--grey-0);
      font-size: 12px;
      margin-bottom: 16px;
      display: inline-block;
    }

    select {
      background-color: var(--grey-2);
      border: 1px solid var(--grey-2);
      color: var(--grey-1);
      width: 100%;
      padding: 9px 5px;
      border-radius: 3px;
      margin-bottom: 20px;
      text-align: left;
    }
  }
`
