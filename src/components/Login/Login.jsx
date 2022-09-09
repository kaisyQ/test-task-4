export const Login = () => {
    return <>
        <form className='login'>
            <div className="login-item">
                <label htmlFor="login"></label>
                <input type="text" id="login"/>
            </div>
            <div className="login-item">
                <label htmlFor="password"></label>
                <input type="password" id="password"/>
            </div>
        </form>
    </>
}