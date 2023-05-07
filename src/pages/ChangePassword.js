const ChangePassword = (props) => {

    return (
        <div className="changePassword-page">
            <button onClick={()=> props.closeChangePasswordPage()}>X</button>
            {/* <h3></h3> */}
            <form className="changePassword-form">
             <div id="mail">
                <input className="email" type="password" value={props.OldPassword} onChange={(e)=>props.handlePasswordChange(e)} id="oldPassword"  placeholder="Enter old Password" required />
            <input className="email" type="text" value={props.SecurityKey} onChange={(e)=>props.handlePasswordChange(e)} id="key"  placeholder = "Enter Security Key" required />
       
    <input className="email" type="password" value={props.NewPassword} onChange={(e)=>props.handlePasswordChange(e)} id="newPassword"  placeholder="Enter New Password" required />
        </div>
        <div className="btn-container">
<button onClick={(e)=> props.changePasswordBtn(e)} type="submit"  className="proceed-btn">Change Password</button>
</div>
     </form>  
      </div>
      );
}


export default ChangePassword;