const AddPage = ({closeAddBtn,firstName,lastName,email,phone,sex,handleChange,addBtn}) => {

            return (
                <div className="add-page">
                    <button onClick={()=>  closeAddBtn()} className="proceed-btn">X</button>
                    <h3>Register data manually</h3>
                    <form className="add-form"  onSubmit={(e)=> addBtn(e)}>
        <div id="name">
        <input className="name" type="text"  value={firstName} onChange={(e)=> handleChange(e)} id="firstName" placeholder="First name" required />
        <input className="name" type="text" value={lastName} onChange={(e)=> handleChange(e)} id="lastName"  placeholder="Last name" required />
                </div>	
                <div id="mail">
            <input className="email" type="email" value={email} onChange={(e)=> handleChange(e)} id="email"  placeholder="Email" required />
            
            <input className="email" type="phone" value={phone} onChange={(e)=> handleChange(e)} id="phone"  placeholder="Phone number" required />
                </div>
                <div className="radio">
        <div className="radio-one">
        <label> Male</label>  
        <input className="radio-b" name="sex" type="radio" value='Male' onChange={(e)=> handleChange(e)} id="radio1" />
 </div>
        <div className="radio-one">
     <label>Female</label>
     <input className="radio-b" name="sex" type="radio" value='Female' onChange={(e)=> handleChange(e)} id="radio2" />
  </div>
   </div>
                <div className="btn-container">
        <button type="submit"  className="proceed-btn">Add New</button>
        </div>
             </form>  
              </div>
              );
        }


export default AddPage;