const AddPage = (props) => {

            return (
                <div className="add-page">
                    <button onClick={()=> props.closeAddBtn()} className="proceed-btn">X</button>
                    <h3>Register data manually</h3>
                    <form className="add-form">
        <div id="name">
        <input className="name" type="text"  value={props.firstName} onChange={(e)=>props.handleChange(e)} id="firstName" placeholder="First name" required />
        <input className="name" type="text" value={props.lastName} onChange={(e)=>props.handleChange(e)} id="lastName"  placeholder="Last name" required />
                </div>	
                <div id="mail">
            <input className="email" type="email" value={props.email} onChange={(e)=>props.handleChange(e)} id="email"  placeholder="Email" required />
            
            <input className="email" type="phone" value={props.phone} onChange={(e)=>props.handleChange(e)} id="phone"  placeholder="Phone number" required />
                </div>
                <div className="radio">
        <div className="radio-one">
        <label> Male</label>  
        <input className="radio-b" type="radio" value={props.sex} onChange={(e)=>props.handleChange(e)} id="radio1" />
 </div>
        <div className="radio-one">
     <label>Female</label>
     <input className="radio-b" type="radio" value={props.sex} onChange={(e)=>props.handleChange(e)} id="radio2" />
  </div>
   </div>
                <div className="btn-container">
        <button onClick={(e)=> props.addBtn(e)} type="submit"  className="proceed-btn">Add New</button>
        </div>
             </form>  
              </div>
              );
        }


export default AddPage;