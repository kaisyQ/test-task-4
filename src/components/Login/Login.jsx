import styled from "styled-components"

export const Login = () => {

    const FormWrapper = styled.div`
        max-width: 480px;
        min-height: 330px;
        padding: 25px 20px;
        position: fixed;
        left: 50%;
        top: 50%;
        border: 5px solid #27569C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    `
    const FormTitle = styled.h2`
        text-align: center;
        font-size: 24px;
        line-height: 29px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `
    return <>
        <FormWrapper>
            <FormTitle>Autorization</FormTitle>
            <div className="login-item">
                <label htmlFor="login">login</label>
                <input type="text" id="login"/>
            </div>
            <div className="login-item">
                <label htmlFor="password">password</label>
                <input type="password" id="password"/>
            </div>
        </FormWrapper>
    </>
}