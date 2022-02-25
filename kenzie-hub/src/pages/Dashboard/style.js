import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 576px;
    display: flex;
    flex-direction: column;
    height: max-content;
    ${up('md')} {
      width: 100%;
      max-width: 1100px;
    }

    hr {
      height: 1px;
      width: 100%;
      background-color: var(--grey-3);
      opacity: 0.1;
    }
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 48px;
  padding: 0 5px;

  > div > img {
    width: 105px;
    height: 14px;
  }

  button {
    width: 55px;
    height: 32px;
    background-color: var(--grey-3);
    border: none;
    border-radius: 4px;
    color: var(--grey-0);

    :hover {
      background-color: var(--grey-2);
    }
  }
`

export const SectionUser = styled.section`
  width: 100%;
  padding: 20px 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;

  ${up('md')} {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  h2 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: normal;
  }
`

export const SectionTec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  margin-top: 10px;
  padding: 0 5px;

  h3 {
    color: var(--grey-0);
    font-size: 16px;
    font-weight: bold;
  }

  button {
    color: var(--grey-0);
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey-3);

    :hover {
      background-color: var(--grey-2);
    }
  }
`

export const ListTechsContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: var(--grey-3);
  padding: 16px 8px;
`
