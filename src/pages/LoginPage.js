const LoginPage = (props) => {

    return (
        <div className="login-page">
            <h3>Welcome!</h3>
            <form className="add-form">
        <div id="mail">
    <input className="email" type="password" value={props.password} onChange={(e)=>props.handlePassword(e)} id="phone"  placeholder="Enter Password" required />
        </div>
        <div className="btn-container">
<button onClick={(e)=> props.loginBtn(e)} type="submit"  className="proceed-btn">Login</button>
</div>
     </form>  
      </div>
      );
}


export default LoginPage;