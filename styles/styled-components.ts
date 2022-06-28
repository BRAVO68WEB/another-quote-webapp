import styled from 'styled-components'

export const Container = styled.main`
    min-height: 100vh;
    width: 100%;
    /* background: #fafafa; */
    background-image: url("images/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    margin: 3rem auto 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Box = styled.div`
    width: 100%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    /* box-shadow */
    -webkit-box-shadow: rgba(0,0,0,0) 0px 7px 10px;
    -moz-box-shadow: rgba(0,0,0,0) 0 7px 10px;
    box-shadow: rgba(0,0,0,0) 0 7px 10px;
    background: rgb(43,40,94);
    background: -moz-linear-gradient(90deg, rgba(43,40,94,1) 0%, rgba(103,103,241,1) 52%, rgba(0,212,255,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(43,40,94,1) 0%, rgba(103,103,241,1) 52%, rgba(0,212,255,1) 100%);
    background: linear-gradient(90deg, rgba(43,40,94,1) 0%, rgba(103,103,241,1) 52%, rgba(0,212,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2b285e",endColorstr="#00d4ff",GradientType=1); 
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.lightWhite};
    
    flex-direction: column;
    max-width: 650px;
    min-height: 40vh;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 550px;
    min-height: 35vh;
    margin: 0 auto;
    padding: 1.5rem;
    width: 100%;
`

export const Quote = styled.p`
    font-size: calc(1.8rem + 0.2vw);
    opacity: 0.95;
    letter-spacing: 1px;
    text-align: center;
    width: 100%;
    color: white;
`

export const Author = styled.div`
    margin-top: 2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    max-width: 400px;
    font-size: calc(1.4rem + 0.2vw);
    opacity: 0.65;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const ButtonsWrapper = styled.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    width: 100%;

    max-width: 450px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const Button = styled.button`
    border: 2px solid ${({ theme }) => theme.lightWhite};
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0.75rem 1.5rem;
    color: ${({ theme }) => theme.lightWhite};
    background: ${({ theme }) => theme.red};

    &:hover {
        color: ${({ theme }) => theme.red};
        background: ${({ theme }) => theme.lightWhite};
        border: 2px solid ${({ theme }) => theme.red};
    }
`
export const Tweet = styled.a`
    border: 2px solid ${({ theme }) => theme.lightWhite};
    outline: none;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0.75rem 1.5rem;
    color: ${({ theme }) => theme.lightWhite};
    background: ${({ theme }) => theme.lightBlue};

    &:hover {
        color: ${({ theme }) => theme.lightBlue};
        background: ${({ theme }) => theme.lightWhite};
        border: 2px solid ${({ theme }) => theme.lightBlue};
    }
`
export const Github = styled.a`
    margin: 2rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.dark};
`
