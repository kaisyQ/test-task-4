import { Login } from "./components/Login/Login"
import { Header } from "./components/Header/Header"
import styled from 'styled-components'

export const App = () => {

    const AppWrapper = styled.div`
        font-family: 'Inter', sans-serif;
    `

    return <>
        <AppWrapper>
            <Header />
            <Login />
        </AppWrapper>
    </>
}