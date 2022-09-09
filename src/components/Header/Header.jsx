import logo from './../../Images/logo.png'
import group from './../../Images/Group.png'
import styled from 'styled-components'

export const Header = ({ username }) => {

    const HeaderWrapper = styled.div`
        background-color: #E4B062;
        padding: 0 37px;
    `
    const Header = styled.header`
        max-width: 1440px;
        padding: 27px 37px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Username = styled.div`
        font: inherit;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        margin-right: 24px;
    `
    const ExitBlock = styled.div`
        display: flex;
        align-items: center;
    `
    return <>
        <HeaderWrapper>
            <Header>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                { username && 
                    <div>
                        <Username />
                        <div>
                            <img src={group} alt="exit"/>
                        </div>
                    </div> 
                }
                <ExitBlock>
                    <Username>Username</Username>
                    <div>
                        <img src={group} alt="exit"/>
                    </div>
                </ExitBlock> 
            </Header>
        </HeaderWrapper>
    </>
}